const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LineRoomSchema = new Schema({
  lineName: {
    type: String,
  },
});

module.exports = mongoose.model("lines", LineRoomSchema);
