const words = require("../models/words");

exports.createWord = async (req, res) => {
  try {
    // Safely extract wordList from req.body
    const wordList = req.body.wordList;
   
    // Validate
    if (!Array.isArray(wordList)) {
      return res.status(400).json({
        success: false,
        message: "'wordList' must be an array in the request body",
      });
    }

    // Prepare entries
    const entries = wordList.map(({word,transliterations})=> ({
      word: word?.trim(),
      transliterations:transliterations
    }));
   
    

    // Insert into DB
    const response = await words.insertMany(entries);

    res.status(200).json({
      success: true,
      data: response,
      message: 'Entries created successfully',
    });

  } catch (err) {
    console.error("Insert error:", err);
    res.status(500).json({
      success: false,
      message: err.message || 'Internal server error',
    });
  }
};