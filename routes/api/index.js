// Route to API
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/workouts", apiRoutes);

module.exports = router;
