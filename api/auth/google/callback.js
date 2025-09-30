const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');

const client = new OAuth2Client({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUri: 'https://personal-website-77yt3khar-ssweilees-projects.vercel.app/api/auth/google/callback',
});

const uri = process.env.MONGODB_URI;
const mongoClient = new MongoClient(uri);

export default async function handler(req, res) {
  try {
    const { code } = req.query;
    const { tokens } = await client.getToken(code);
    const ticket = await client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { email, sub: googleId, name } = ticket.getPayload();

    await mongoClient.connect();
    const db = mongoClient.db('your_database_name');
    const usersCollection = db.collection('users');

    let user = await usersCollection.findOne({ email });
    if (!user) {
      const result = await usersCollection.insertOne({
        email,
        googleId,
        name,
        createdAt: new Date(),
        authType: 'google',
      });
      user = { _id: result.insertedId };
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.redirect(`/dashboard?token=${token}`);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  } finally {
    await mongoClient.close();
  }
}