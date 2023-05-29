const express = require("express");
const viewController = require("../controllers/viewController");
const router = express.Router();

router.get("/", viewController.base);
router.get("/tenants", viewController.tenants);
router.get("/sales", viewController.sales);
router.get("/contact", viewController.contact);
router.get("/accessibility", viewController.accessibility);
router.get("/privacy", viewController.privacy);

module.exports = router;
