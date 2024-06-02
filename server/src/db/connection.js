const mongoose = require('mongoose');

const dbConnect = async() => {
    try{
        const connection = await mongoose.connect('mongodb://127.0.0.1:27017/edtechspark');
    // console.log(connection);
    if(connection) console.log("Connected to MongoDB");
    }catch(err){
        console.log(err)
        process.exit()
    }
}

module.exports = dbConnect
