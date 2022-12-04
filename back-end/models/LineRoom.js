const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LineRoomSchema = new Schema({
  lineName: {
    type: String,
  },

  id: {
    type: Number,
  },
});

module.exports = mongoose.model("lines", LineRoomSchema);
