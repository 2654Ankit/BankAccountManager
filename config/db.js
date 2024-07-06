const mongoose = require("mongoose")
const CONNECTIO_STRING = require("./Constant")
const connectdb = (req,res)=>{

    try {
        
        mongoose.connect(CONNECTIO_STRING)
        console.log("Connection to db success");
    } catch (error) {
        console.log(error);
        
    }

}

module.exports = connectdb