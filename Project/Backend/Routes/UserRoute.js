const express = require('express');
const { userRegistration, userLogin } = require('../Controller/UserController');
const router = express.Router();
const authMiddleware=require('../Middleware/authMiddleware')

router.post('/registration',(req,res)=>{
     userRegistration(req,res,(data)=>{
        res.status(200).json({msg:"User created successfully",data:data})
     },(err)=>{
           res.json(err)
     })
      
})

router.post('/login',(req,res)=>{
     userLogin(req,res,(data)=>{
          res.json({
  message: "login data",
  data
});
     })    
})

router.post('/addtocart',authMiddleware,(req,res)=>{
     console.log(req.body);
     
      addToCart(req,res)
      
})
module.exports= router