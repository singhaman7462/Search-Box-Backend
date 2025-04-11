const express=require('express');
const router=express.Router();

//Import controller
const {createWord}=require("../controllers/createWord");
const {getWords}=require("../controllers/getWord");


//define API routes
router.post("/createWord",createWord);
router.get("/getWords",getWords);

module.exports=router; 
