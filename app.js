const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");
app.set("views", `${__dirname}/views`);

const viewRouter = require("./routes/viewRoutes");

app.use("/", viewRouter);

module.exports = app;
