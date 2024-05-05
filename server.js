const dotenv = require("dotenv");
const app = require("./app");

//##################### Configure .env File for application #####################
//User for Ubuntu server
dotenv.config({ path: "/home/josh/environment-variables/config.env" });

//Use for localhost - test
// dotenv.config({ path: "./config.env" });
// ##################### Configure .env File for application #####################

const port = process.env.PORT;
const env = process.env.NODE_ENV;

app.listen(port, () => {
  console.log(`Environment: ${env}`);
  console.log(`App running on port ${port}!`);
});

//git test
