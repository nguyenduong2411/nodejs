const mongoose = require("mongoose");
const Role = mongoose.model(
    "Role",
    new mongoose.Schema({
        roles: String
    })
);
module.exports = Role;