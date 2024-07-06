const express = require("express");
const connectdb = require("./config/db");
const { Customer, AccountCheck, Deposite, Withdraw, Balance } = require("./Router/Route");

const app = express()

connectdb()
app.use(express.json())
app.use("/api/v1/Customer",Customer)

app.use("/api/v1/Account",AccountCheck)
app.use("/api/v1/Account",Deposite)
app.use("/api/v1/Account",Withdraw)
app.use("/api/v1/Account",Balance)

app.listen(5000,()=>{
    console.log('App is live on 5000');
})