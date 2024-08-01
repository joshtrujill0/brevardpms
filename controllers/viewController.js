const { default: axios } = require("axios");
// const properties = require("../public/js/salesproperties.json");

exports.base = (req, res) => {
  res.status(200).render("homepage");
};

// exports.sales = (req, res) => {
//   res.status(200).render("sales", { properties });
// };

exports.sales = async (req, res) => {
  const endpoint = process.env.IDX_LINK;
  const key = process.env.IDX_KEY;
  const idx = await axios.get(endpoint, {
    headers: { accesskey: key },
  });
  const listings = idx.data.data;
  res.status(200).render("sales", { listings });
};

exports.privacy = (req, res) => {
  res.status(200).render("privacy");
};

exports.propertyManagement = (req, res) => {
  res.status(200).render("property-management");
};

exports.tenants = async (req, res) => {
  const endpoint = process.env.RENTEC_LINK;
  const rentec = await axios.post(endpoint);
  const listings = rentec.data.properties;
  res.status(200).render("tenants", {
    listings,
  });
};

exports.lorrie = (req, res) => {
  res.status(200).render("lorrie");
};

exports.lexi = (req, res) => {
  res.status(200).render("lexi");
};

exports.donna = (req, res) => {
  res.status(200).render("donna");
};

exports.tony = (req, res) => {
  res.status(200).render("tony");
};

exports.betty = (req, res) => {
  res.status(200).render("betty");
};

exports.carmen = (req, res) => {
  res.status(200).render("carmen");
};

exports.traci = (req, res) => {
  res.status(200).render("traci");
};

exports.steve = (req, res) => {
  res.status(200).render("steve");
};

exports.vanessa = (req, res) => {
  res.status(200).render("vanessa");
};

exports.susan = (req, res) => {
  res.status(200).render("susan");
};

// exports.scott = (req, res) => {
//   res.status(200).render("scott");
// };

exports.idx = (req, res) => {
  res.status(200).render("idx");
};
