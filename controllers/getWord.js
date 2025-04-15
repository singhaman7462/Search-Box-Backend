const { response } = require('express');
const word = require('../models/words');

exports.getWords = async (req, res) => {
    const prefixList = req.query.prefix?.split(',') || [];
    const regexConditions = prefixList.map(prefixes => ({
        word: new RegExp(`^${prefixes}`, "i") // case-insensitive match
      }));
    try {
        //fetch all todos items from database
        const suggestions = await word.find({ $or: regexConditions });

        //response
        res.status(200).json({
            success: true,
            data: suggestions,
            message: 'Got all the data'
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'Server errro'
        });
    }
}


