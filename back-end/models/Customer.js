const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
  username: {
    type: String,
  },

  password: {
    type: String,
  },

  phone: {
    type: Number,
  },

  identityNumber: {
    type: Number,
  },

  address: {
    type: String,
  },

  startContract: {
    type: String,
  },
});

module.exports = mongoose.model("customers", CustomerSchema);
