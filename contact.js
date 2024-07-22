import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5050; 

const contactEmail = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body
  const mail = {
    from:  `${firstName} ${lastName}`,
    to: process.env.EMAIL_USER,
    subject: "Contact from Personal Website",
    html: `<p>Name: ${firstName} ${lastName}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  console.log("Received POST request to /contact");

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json({ message: 'Message Sent Successfully', sentMessage: mail })
    }
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app

