const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([{ name: "Nike" }, { name: "Netflix" }]);
});


module.exports = router