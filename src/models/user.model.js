const mongoose = require("mongoose");
const Role = require("./role.model"); // Import the Role model

const user = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Role
    }]
});
const User = mongoose.model("User", user);
module.exports = User;