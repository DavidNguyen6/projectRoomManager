const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const billSchema = new Schema({
  waterNumberNew: {
    type: Number,
  },

  waterNumberOld: {
    type: Number,
  },

  electricNumberOld: {
    type: Number,
  },

  electricNumberNew: {
    type: Number,
  },
  
  totalPrice: {
    type: Number,
  },

  date: {
    type: String,
  },

  roomId: {
    type: String,
  },

  customerId: {
    type: String,
  },
});

module.exports = mongoose.model("bills", billSchema);
