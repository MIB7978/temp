const mongoose = require("mongoose");
const { model } = require("mongoose");
const { productSchema } = require("./product");

const custproductSchema = mongoose.Schema({
  name: {
    type: String,
    // required: true,
    trim: true,
  },
  description: {
    type: String,
    // required: true,
    trim: true,
  },
  fabric: {
    type: String,
    // required: true,
    trim: true,
  },
  quantity: {
    type: Number,
    // required: true,
  },
  wood: {
    type: String,
    // required: true,
  },
  images: [
    {
      type: String,
      // required: true,
    },
  ],
});

const CustProduct = mongoose.model("Customized_Product", custproductSchema);
module.exports = CustProduct;
