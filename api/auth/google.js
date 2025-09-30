const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUri: 'https://personal-website-77yt3khar-ssweilees-projects.vercel.app/api/auth/google/callback',
});

export default async function handler(req, res) {
  const redirectUrl = client.generateAuthUrl({
    scope: ['profile', 'email'],
  });
  res.redirect(redirectUrl);
}