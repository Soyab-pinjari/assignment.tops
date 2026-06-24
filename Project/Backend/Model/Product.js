const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  pname: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  cname: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category", // Model name
    required: true,
  },
  description:{
     type:String,
     required:true,
  }
  ,
  pimage:{
      type:String,
      required:true
  }
});

module.exports = mongoose.model("Product", ProductSchema);