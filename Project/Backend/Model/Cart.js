const { Schema, default: mongoose } = require("mongoose");

const CartSchema = new Schema({
    pid:{
         type: mongoose.Schema.Types.ObjectId,
         ref:"Products",
        required:true,
    },
    uid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true
    }
    ,
    qty:{
        type:Number,
        default:1,
    }
})

module.exports= mongoose.model('Cart',CartSchema)