const Product = require('../Model/Product');
const createProducts = async(req,res,data,err)=>{
    try {
        const result = await Product.create({
            pname:req.body.pname,
            price:req.body.price,
            description:req.body.description,
            pimage:"uploads/"+req.file.filename,
            cname:req.body.cname
        })
      // console.log("Saved:", result);
        return res.status(201).json({
      msg: "Product created",
      result,
    });
    } catch (error) {
    console.log("ERROR:", error);
    return res.status(500).json({
      msg: error.message,
    });
  }
};
const getProduct = async(req,res,data,err)=>{
     try {
       const products = await Product.find()
  .populate("cname", "cname");


  res.json(products);
     } catch (error) {
          console.log(error);  // <-- ye zaroor lagao
   res.status(500).json({
      success:false,
      message:error.message
   });
     }
}
// const getProductById = async(req,res,data,err)=>{
//      try {
//         const res = await Product.findById(req.params.id);
//         data(res)
//      } catch (error) {
//         err(error)
//      }
// }

const deleteCategoryById= async(req,res,data,err)=>{
    try {
        const result = await Category.findByIdAndDelete(req.params.id);
        data(result)
    } catch (error) {
        err(error)
    }
}

const updateProductById = async (req, res, data, err) => {
  try {
    const result = await Product.updateOne(
        {_id:Object(req.params.id)},{
            pname:req.body.pname,
            price:req.body.price,
            description:req.body.description,
            pimage:"uploads/"+req.file.filename,
            cname:req.body.cname
        }
    )
    data(result);
  } catch (error) {
    err(error);
  }
};

module.exports = {createProducts,getProduct,updateProductById}