const express = require("express");
const router = express.Router();
const companiesController = require("../controllers/companies");

router.get("/", companiesController.getCompanies);

module.exports = router;
