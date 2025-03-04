const mongoose  = require("mongoose");

// Connecting mongoose with NodeJs
async function connectMongoDb(url){

return  mongoose.connect(url)

}

module.exports = {
    connectMongoDb,
};

