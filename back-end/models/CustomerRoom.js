const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CustomerRoomSchema = new Schema({
  waterNumber: {
    type: String,
  },

  electricNumber: {
    type: Boolean,
  },

  customerId: {
    type: String,
  },

  roomId: {
    type: String,
  },

  id: {
    type: Number,
  },
});

module.exports = mongoose.model("customerRoom", CustomerRoomSchema);
