const getCompanies = (req, res) => {
  res.json([{ name: "Nike" }, { name: "Netflix" }]);
};

module.exports = {
  getCompanies,
};
