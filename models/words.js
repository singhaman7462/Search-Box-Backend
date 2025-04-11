const mongoose=require('mongoose');


//Description of your data is schema
const wordSchema=new mongoose.Schema({
    word:{
        type:String,
        required:true,
        maxLength:50,
    }
    
})

//Syntax to export the schema.todo is the name it will follow when it will get exported.todoSchema is the object which should be expoteed
module.exports=mongoose.model("words",wordSchema);
