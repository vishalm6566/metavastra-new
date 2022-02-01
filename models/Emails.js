const mongoose = require('mongoose');
const {Schema} = mongoose;
var validator = require('validator');
const EmailsSchema = new Schema({

    email:{
        type : String,
        required : true,
        unique : true,
      
    },
 
  });

  module.exports = mongoose.model('emails', EmailsSchema);