const express = require("express");
const custmizeRouter = express.Router();
const CustProduct = require("../models/cust_product");
const auth = require("../middlewares/auth");
custmizeRouter.post("/api/place-order", async (req, res) => {
  try {
    const { name, description, fabric, quantity, wood, images } = req.body;
    let custproduct = new CustProduct({
      name,
      description,
      fabric,
      quantity,
      wood,
      images,
    });
    custproduct = await custproduct.save();
    res.json(custproduct);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = custmizeRouter;
