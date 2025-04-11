const express= require('express');
const app=express();


//load config from env file
require("dotenv").config();
const PORT=process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const searchRoutes=require("./routes/searchRoutes");
//mount the todo API routes.COmplete the url ->locolhost+mounted string+route
app.use("/api/v1",searchRoutes);

//start server
app.listen(PORT,()=>{
console.log(`Listening on port ${PORT} successfully`);
})


//DB connection

const dbConnect=require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1> This is the homepage </h1>`);
});
