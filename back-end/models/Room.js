const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RoomSchema = new Schema({
  nameRoom: {
    type: String,
  },

  roomCode: {
    type: String,
  },

  categoryRoom: {
    type: String,
  },

  priceRoom: {
    type: String,
  },

  statusRoom: {
    type: Boolean,
  },

  lineId: {
    type: String,
  },

  id: {
    type: Number,
  },
});

module.exports = mongoose.model("rooms", RoomSchema);
