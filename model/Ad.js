const mongoose = require("mongoose");

const AdSchema = mongoose.Schema({
  companyId: { type: mongoose.SchemaTypes.ObjectId, ref: "Company" },
  primaryText: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  CTA: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Ad", AdSchema);
