const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userpostSchema = new Schema({
  username: {type: String,required: true,minlength: 4},
  phone:{type:Number,length:10},
  message: { type: String, required: true }},
{
  timestamps: true,
});

const userpost = mongoose.model('userpost', userpostSchema);

module.exports = userpost;