const Service = require("../models/service-model");

const services = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      // Handle the Case Where no Document Was Found
      res.status(404).json({ msg: "No Services Available" });
      return;
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(`Services : ${error}`);
  }
};

module.exports = services;
