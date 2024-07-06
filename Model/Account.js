const mongoose = require("mongoose")

const Accounts = new mongoose.Schema({
    Account :{
       type: Number,  
       unique:true 
    },
    Balance:Number,
    PIN:Number,
})

const AccountModel = mongoose.model("Account",Accounts)

module.exports = {AccountModel}