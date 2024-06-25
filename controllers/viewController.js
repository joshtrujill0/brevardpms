const { default: axios } = require("axios");
const properties = require("../public/js/salesproperties.json");

exports.base = (req, res) => {
  res.status(200).render("homepage");
};

exports.sales = (req, res) => {
  res.status(200).render("sales", { properties });
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

<<<<<<< HEAD
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

exports.scott = (req, res) => {
  res.status(200).render("scott");
};

=======
>>>>>>> f0e1ecb0c4702c1538e61c5c5cbfe04028df4bf9
exports.idx = (req, res) => {
  res.status(200).render("idx");
};
