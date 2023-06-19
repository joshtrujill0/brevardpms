const express = require("express");
const actionsController = require("../controllers/actionsController");

const router = express.Router();

router.post("/submit", actionsController.formSubmit);

module.exports = router;
