const Company = require("../model/Company");

const getCompanies = async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
};

module.exports = {
  getCompanies,
};
