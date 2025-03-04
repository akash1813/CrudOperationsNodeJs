const mongoose  = require("mongoose");

// Creating Schema

const userSchema = new mongoose.Schema({

    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    Jobtitle:{
        type: String,
   },
   Gender:{
    type: String,
   }

},
{timestamps : true}
)


// Creating Model
const User = mongoose.model("user",userSchema);

module.exports = User;