const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { search } = req.query;

  if (search) {
    res.json({ search });
  } else {
    res.json([{ name: "ad1" }, { name: "ad2" }]);
  }
});

module.exports = router;
