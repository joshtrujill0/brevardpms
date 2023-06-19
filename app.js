const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");
app.set("views", `${__dirname}/views`);

const viewRouter = require("./routes/viewRoutes");
const actionsRouter = require("./routes/actionsRoutes");

app.use("/", viewRouter);
app.use("/api/v1/contact", actionsRouter);

module.exports = app;
