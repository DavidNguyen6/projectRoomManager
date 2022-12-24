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
    type: Number,
  },

  statusRoom: {
    type: Boolean,
  },
  
  lineId: {
    type : String
  }
});

module.exports = mongoose.model("rooms", RoomSchema);
