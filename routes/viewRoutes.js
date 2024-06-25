const express = require("express");
const viewController = require("../controllers/viewController");
const router = express.Router();

router.get("/", viewController.base);
router.get("/tenants", viewController.tenants);
router.get("/sales", viewController.sales);
router.get("/privacy", viewController.privacy);
router.get("/property-management", viewController.propertyManagement);

router.get("/lorrie-lovett", viewController.lorrie);
router.get("/lexi-lovett", viewController.lexi);
router.get("/donna-sprague", viewController.donna);
router.get("/tony-dubravski", viewController.tony);
router.get("/betty-buddemeyer", viewController.betty);
router.get("/carmen-minthorn", viewController.carmen);
router.get("/traci-harrell", viewController.traci);
router.get("/steve-keener", viewController.steve);
router.get("/vanessa-irizarry", viewController.vanessa);
router.get("/susan-ellsworth", viewController.susan);
router.get("/scott-sharp", viewController.scott);
router.get("/lorrie-lovett", viewController.lorrielovett);
router.get("/idx", viewController.idx);

module.exports = router;
