const Ad = require("../model/Ad");

const getAds = async (req, res) => {
  const { search } = req.query;

  if (search) {
    // only return ads that match search term
    const matchedAds = await Ad.find({
      $or: [
        { primaryText: { $regex: search, $options: "i" } },
        { headline: { $regex: search, $options: "i" } },
      ],
    }).populate();
    return res.json(matchedAds);
  }

  const ads = await Ad.find();
  res.json(ads);
};

module.exports = {
  getAds,
};
