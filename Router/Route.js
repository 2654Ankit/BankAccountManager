const express = require("express")
const { CustomerControllers } = require("../Controller/Customer")
const { AccountController, depositeController, withdrawController, balanceController } = require("../Controller/Account")

const app = express()

const Customer = app.post("/add",CustomerControllers)


const AccountCheck = app.post("/check/:id",AccountController)
const Deposite = app.post("/deposite/:id",depositeController)
const Withdraw = app.post("/withdraw/:id",withdrawController)
const Balance = app.get("/balance/:id",balanceController)

module.exports = {Customer,AccountCheck,Deposite,Withdraw,Balance}



