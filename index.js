const express=require('express');
const mongoose=require('mongoose');
const cors = require('cors');
const app = express();
const dotenv=require('dotenv');
dotenv.config();

const options={
    useNewUrlParser:true,
    autoIndex: true,
    keepAlive: true,
    connectTimeoutMS:10000,
    socketTimeoutMS: 45000,
    family: 4,
    useUnifiedTopology:true
}
// contraseña : LazG2LLCKSjxyFU6 User:Matias
mongoose.connect(process.env.DB,options,(error)=>{
    if (error){
        console.log(error);
    }else{
        console.log("Connect to database");
    }
}
    )

app.listen(3000,()=>{
    console.log(`server started on port : ${process.env.PORT}`);
})