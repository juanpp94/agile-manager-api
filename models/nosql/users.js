const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        last_name: {
            type: String
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        },
        role: {
            type: ["scrum-master","lead-scrum-master"],
            default: "scrum-master"
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)