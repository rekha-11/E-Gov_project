const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require('cors')
const morgan = require('morgan')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())

app.use(morgan('dev'))

app.post("/send-mail", async (req, res) => {
  try {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    let info = await transporter.sendMail({
      from: `"E Gov Project" <${testAccount.user}>`,
      to: "Nagarjuna College, nagarjunacollege@example.com", 
      subject: "Hello ✔",
      text: JSON.stringify(req.body)
    });

    console.log("\nMessage sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.status(200).json({
      msg: "Message Sent!",
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
