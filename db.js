const mongoose = require('mongoose');


const connectToMongo = () =>{
    mongoose.connect(process.env.URI).then(()=>{
    
        console.log("connect")
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = connectToMongo;