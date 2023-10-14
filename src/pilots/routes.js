const { Router } = require("express");
const pilotController = require("./pilotController");

const router = Router();

router.get("/", pilotController.getPilots);
router.post("/", pilotController.addPilot);
router.get("/:id", pilotController.getPilotById);
router.delete("/:email", pilotController.deletePilot);

module.exports = router;
