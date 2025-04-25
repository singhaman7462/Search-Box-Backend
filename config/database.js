const mongoose = require('mongoose');

//It stores all the thingd written in the .env file in  the process object
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log("DB connected successfully" );
        
    })
    .catch((eror)=>{
       console.log("Issue oin db connection");
       console.log(eror);
       //What is this??
       process.exit(1);
    })
}

module.exports=dbConnect;