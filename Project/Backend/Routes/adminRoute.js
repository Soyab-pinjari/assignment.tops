const express = require('express');
const router = express.Router();
const upload = require('../comman/multerConfig');
const {createCategory, getCategory, deleteCategoryById} = require('../Controller/categoryController');
const {createProducts, getProduct}=require('../Controller/ProductController');
const authMiddleware = require('../Middleware/authMiddleware');

router.get('/', (req, res) => {
    res.json({
        success: true,
        user: req.user
    });
});



router.post('/category/create',upload.single('cimage'),(req,res)=>{
      
        createCategory(req,res,(data)=>{
                res.status(200).json({msg:"Category added",data:data})
        },(err)=>{
               res.status(500).json(err)
        })
})

router.get('/category',authMiddleware,(req,res)=>{
        console.log(req.body);
getCategory(req,res,(data)=>{
                res.status(200).json({catdata:data})

        },(err)=>{
               res.status(500).json(err)
        })
})
router.delete('/category/:id',(req,res)=>{
        deleteCategoryById(req,res,(data)=>{
                res.status(200).json({catdata:data})
        },(err)=>{
               res.status(500).json(err)
        })
})



// --------------------------------product -----------------------------

router.post('/product/create',upload.single('pimage'),(req,res)=>{
        createProducts(req,res,(data)=>{
                res.status(200).json({msg:"Product added",data:data})
        },(err)=>{
               res.status(500).json(err)
        })
})
router.get('/product',authMiddleware,(req,res)=>{
        getProduct(req,res,(data)=>{
                res.status(200).json({msg:"Product added",data:data})
        },(err)=>{
               res.status(500).json(err)
        })
})

module.exports=router;

