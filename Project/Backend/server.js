const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./Database/db");
const AdminRoute = require('./Routes/adminRoute')
const UserRoute = require('./Routes/UserRoute');
const authMiddleware = require("./Middleware/authMiddleware");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", 
  })
);
app.use('/uploads', express.static('uploads'));

connection();
app.get('/',(req,res)=>{
    res.send("app working")
})

app.use('/admin',authMiddleware,AdminRoute)
app.use('/',UserRoute)
app.listen(3000,()=>{
    console.log("app running on 3000 port");
})