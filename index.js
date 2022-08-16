const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();

mongoose
  .connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
  .then(() => console.log("Connected to DB!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json({ status: "Server running" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});