const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    username:{
        type: String,
        require: [true, "username is required"]
    },
    firstname: {
        type: String,
        minlength: 3,
        maxlength: 30,   
    },
    email: {
        type: String,
        unique: true,
    }
},{
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;