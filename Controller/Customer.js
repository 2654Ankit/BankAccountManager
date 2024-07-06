const { Customers } = require("../Model/Customer");

const CustomerControllers = async(req,res)=>{
    try {
        const {Name,Account,DOB,Bank,IFSC} = req.body
        const Customer =await  Customers.create({Name,Account,DOB,Bank,IFSC})
        res.json({Customer})
    } catch (error) {

        console.log(error);
        
    }
}

module.exports = {CustomerControllers}