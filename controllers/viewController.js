const { default: axios } = require("axios");

exports.base = (req, res) => {
  res.status(200).render("homepage");
};

exports.sales = (req, res) => {
  res.status(200).render("sales");
};

exports.contact = (req, res) => {
  res.status(200).render("contact");
};

exports.accessibility = (req, res) => {
  res.status(200).render("accessibility");
};

exports.privacy = (req, res) => {
  res.status(200).render("privacy");
};

exports.tenants = async (req, res) => {
  const endpoint = process.env.RENTEC_LINK;
  const rentec = await axios.post(endpoint);
  const listings = rentec.data.properties;
  console.log(rentec.data.properties);
  res.status(200).render("tenants", {
    listings,
  });
};
