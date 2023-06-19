const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const email = process.env.EMAIL;

exports.formSubmit = (req, res) => {
  try {
    const transport = nodemailer.createTransport({
      service: "SendGrid",
      auth: {
        user: process.env.SENDGRID_USERNAME,
        pass: process.env.SENDGRID_PASSWORD,
      },
    });

    const mailOptions = {
      from: `<${email}>`,
      to: email,
      subject: `Website Lead | ${req.body.firstName} ${req.body.lastName}`,
      text: `${req.body.firstName} ${req.body.lastName} | ${req.body.email} | ${req.body.message}`,
      html: `<h1>Website Lead Information:</h1><br>
             <p><b>Name:</b> ${req.body.firstName} ${req.body.lastName}</p><br>
             <p><b>Email:</b> ${req.body.email}</p><br>
             <p><b>Message:</b> ${req.body.message}</p>`,
    };

    transport.sendMail(mailOptions, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          status: "success",
          message: "form submitted",
        });
      }
      transport.close();
    });
  } catch (err) {
    return err;
  }
};
