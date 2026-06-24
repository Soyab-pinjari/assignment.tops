const mongoose = require('mongoose');
const url="mongodb://localhost:27017/finalProject";

const connection = async ()=>{
    try {
        await mongoose.connect(url);
        console.log("db connected");
    } catch (error) {
                console.log("error",error);  
                     process.exit(1); 
    }
}
module.exports= connection;