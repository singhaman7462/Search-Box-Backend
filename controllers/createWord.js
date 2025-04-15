//IMport the model
const words=require("../models/words");
//define route handler

exports.createWord= async(req,res)=>{
    const { wordList } = req.body;

const entries = wordList.map(word => ({ word }));

try {
    // Insert multiple word entries into the database
    const response = await words.insertMany(entries);

    // Send success response
    res.status(200).json({
        success: true,
        data: response,
        message: 'Entry created successfully',
    });
} catch (err) {
    console.error(err);
    res.status(500).json({
        success: false,
        data: null,
        message: err.message || 'Internal server error',
    });
}
}