const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

//##################### Configure .env File for application #####################
//User for Ubuntu server
dotenv.config({ path: "/home/josh/environment-variables/config.env" });

//Use for localhost
// dotenv.config({ path: "./config.env" });
//##################### Configure .env File for application #####################

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
             <p><b>Phone Number:</b> ${req.body.phone}</p><br>
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
