const Category = require('../Model/category');

const createCategory = async (req,res,data,err) => {
    try {

        if (!req.file) {
  return res.status(400).json({
    message: "Image is required"
  });
}

    const result = await Category.create({
  cname: req.body.cname,
  cimage: "uploads/" + req.file.filename
});

       

        if(result){
            data(result);
        }

    } catch (error) {
        console.error("ERROR:", error);
        err(error);
    }
}

const getCategory = async(req,res,data,err)=>{
     try {
        const res = await Category.find();
        data(res)
     } catch (error) {
        err(error)
     }
}
const deleteCategoryById= async(req,res,data,err)=>{
    try {
        const result = await Category.findByIdAndDelete(req.params.id);
        data(result)
    } catch (error) {
        err(error)
    }
}

module.exports = {createCategory,getCategory,deleteCategoryById}