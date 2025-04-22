const express= require('express');
const app=express();
const cors = require('cors');


app.use(
    cors({
      origin: "http://localhost:5173", // Allow only your frontend
      methods: ["GET", "POST"], // Allow specific methods
      credentials: true, // If sending cookies
    })
  );

//load config from env file
require("dotenv").config();
const PORT=process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for Search API
const searchRoutes=require("./routes/searchRoutes");
//mount the Search API routes.Complete the url ->locolhost+mounted string+route
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
