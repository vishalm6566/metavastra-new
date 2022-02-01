const mongoose = require('mongoose');
const {Schema} = mongoose;
var validator = require('validator');
const EmailsSchema = new Schema({

    email:{
        type : String,
        required : true,
        unique : true,
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error("email not valid")
            }
        }
    },
 
  });

  module.exports = mongoose.model('emails', EmailsSchema);