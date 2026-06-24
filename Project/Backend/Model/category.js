const { Schema, default: mongoose } = require("mongoose");


const categorySchema=new Schema({
    cname:{
        type:String,
        require:true
    },
    cimage:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model('category',categorySchema);