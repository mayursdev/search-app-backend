const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const adsRoute = require("./routes/ads");
const companiesRoute = require("./routes/companies");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors({ origin: "*" }));

mongoose
  .connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
  .then(() => console.log("Connected to DB!"))
  .catch((err) => console.log(err));

// route handling
app.use("/api/adverts", adsRoute);
app.use("/api/companies", companiesRoute);

app.get("/", (req, res) => {
  res.json({ status: "Server running" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
