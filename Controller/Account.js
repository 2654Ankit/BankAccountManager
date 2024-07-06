const { AccountModel } = require("../Model/Account")
const { Customers } = require("../Model/Customer")

const AccountController = async (req,res)=>{
    try {
        const {Balance,PIN} = req.body
        const user_acc = await Customers.findOne({Account:req.params.id})
        if (!user_acc){
            return res.json({"error":"Account not found"})
        }
        const AccountDetail = await AccountModel.create({Account:req.params.id,Balance,PIN})

        res.json({AccountDetail})
    } catch (error) {
        console.log(error);
        
    }
}

const depositeController=async(req,res)=>{
    try {
        const {Deposite,PIN} = req.body
        const Account = req.params.id
         const Acc = await AccountModel.findOne({Account})
         
         if(PIN!=Acc.PIN){
            return res.json({"status":"Invalid PIN"})
         }
         if(Acc){

            Acc.Balance = Acc.Balance + Deposite

            await user.save()

            res.json({user})

         }
         else{
            console.log("Invalid account number");
         }
    } catch (error) {
        console.log(error);
        
    }
}

const withdrawController=async(req,res)=>{
    try {
        const {Withdraw,PIN} = req.body
        const Account = req.params.id
         const Acc = await AccountModel.findOne({Account})
         
         if(PIN!=Acc.PIN){
            return res.json({"status":"Invalid PIN"})
         }
         if(Acc){

            if(Acc.Balance  < Withdraw){
                return res.json({"message":"Insufficient Balance"})
            }

            Acc.Balance = Acc.Balance -Withdraw

            await Acc.save()

            res.json({"message":`amount ${Withdraw} is withdraw`})

         }
         else{
            console.log("Invalid account number");
         }
    } catch (error) {
        console.log(error);
        
    }
}


const balanceController=async(req,res)=>{
    try {
        const {PIN} = req.body
        const Account = req.params.id
         const Acc = await AccountModel.findOne({Account})
         
         if(PIN!=Acc.PIN){
            return res.json({"status":"Invalid PIN"})
         }
         if(Acc){

            res.json({"Balance":`amount ${Acc.Balance} `})

         }
         else{
            console.log("Invalid account number");
         }
    } catch (error) {
        console.log(error);
        
    }
}




module.exports = {AccountController,depositeController,withdrawController,balanceController}