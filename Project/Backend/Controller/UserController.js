const Users = require('../Model/Users');
const jwt = require('jsonwebtoken');


const userRegistration = async(req,res,data,err)=>{

    console.log(req.body);
    try {
        const response = await Users.insertOne(req.body);
        console.log(response);
            data(response)
        console.log("userdata",data);
        
    } catch (error) {
        err(error)
    
    }
}

const userLogin = async(req,res)=>{
    console.log("body data ",req.body)
    try {
        const user = await Users.findOne({
            email:req.body.email
          
        });
        console.log(user);
        
       if(!user){
           return  res.json({
               error:"Login Failed",
                msg: "Invalid Email or Password"
           })
       }
          const token = jwt.sign(
        {
            id: user._id,
            email: user.email
        },
        "secret123",
        {
            expiresIn: "1h"
        }
    );

    res.status(200).json({
        msg: "Login Success",
        token
    });
        
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json(error)
   
    }
}

const addToCart = async(req,res)=>{
    try {
        let result = await Cart.insertOne(req.body);
        if(result){
            res.status(200).json({msg:"Product added in cart",flag:1})
        }
    } catch (error) {
        console.log(error);
        
        res.json(error)
    }
}
module.exports = {userRegistration,userLogin,addToCart}