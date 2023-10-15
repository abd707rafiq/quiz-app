const express=require('express')

var cors = require('cors');
const app=express()
app.use(cors());

const connectDB=require('../Backend/db/connectDb')

const PORT=process.env.PORT || 5000
const user= require("./routes/user")
const quize=require("./routes/quiz")


app.get("/" , (req,res)=>{
    res.send("I am quiz app");
});

app.use(express.json());

app.use("/", user);

app.use("/", quize);

const start= async()=>{
    try{
        await connectDB();
        app.listen(PORT,()=>{
           console.log(`I am connected to port ${PORT}`);
        });

    }
    catch(error){
        console.log(error);
    }

}


start();