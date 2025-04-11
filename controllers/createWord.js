//IMport the model
const words=require("../models/words");

//define route handler

exports.createWord= async(req,res)=>{
    try{
        //extract query from the req body from frontend
        const {word} = req.body;
        //create a new word and insert in db
        const response=await words.create({word});
        //Send a json response to db with the success flag
        res.status(200).json({
            success:true,
            data:response,
            message:'Entry created successfully'
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            data:"INternal server error",
            message:err.message
        });
        
    }
}