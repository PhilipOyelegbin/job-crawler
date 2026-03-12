const { Router } = require("express");
const jobController = require("../controllers/jobController");

const route = Router();

route.get("/hidden", jobController.getHiddenJobs);
route.get("/rti", jobController.getRTIJobs);
route.get("/rti/:id", jobController.getRTIJobDetails);

module.exports = route;
