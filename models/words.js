const mongoose=require('mongoose');


//Description of your data is schema
const wordSchema=new mongoose.Schema({
    word:{
        type:String,
        required:true,
        maxLength:50,
    },
    transliterations:[{
        type:String,
        maxLength:50
    }]
    //Transliterations is the array of strings
})

//Syntax to export the schema.words is the name it will follow when it will get exported.wordSchema is the object which should be expoteed
module.exports=mongoose.model("words",wordSchema);
