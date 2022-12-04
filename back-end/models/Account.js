const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AccountSchema = new Schema({
  password : {
    type : String,
  },

  username: {
    type : Number
  },

  id: {
    type: Number,
  },
})

module.exports = mongoose.model('account', AccountSchema)