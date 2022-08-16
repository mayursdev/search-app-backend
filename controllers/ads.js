const getAds = (req, res) => {
  const { search } = req.query;

  if (search) {
    // only return ads that match search term
    return res.json({ search });
  }

  res.json([{ name: "ad1" }, { name: "ad2" }]);
};

module.exports = {
  getAds,
};
