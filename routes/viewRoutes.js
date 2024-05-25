const express = require("express");
const viewController = require("../controllers/viewController");
const router = express.Router();

router.get("/", viewController.base);
router.get("/tenants", viewController.tenants);
router.get("/sales", viewController.sales);
router.get("/privacy", viewController.privacy);

router.get("/lorrie-lovett", viewController.lorrielovett);

module.exports = router;
