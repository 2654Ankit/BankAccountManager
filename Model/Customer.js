const mongoose = require("mongoose")

const Customer = new mongoose.Schema({
    Name:String,
    Account:{
        type:Number,
        unique:true
    },
    DOB:Date,
    Bank:String,
    IFSC:String

})

const Customers = mongoose.model("Customer",Customer)

module.exports = {Customers}