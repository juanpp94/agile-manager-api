const mongoose = require("mongoose");

const ProjectScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        start_date: {
            type: Date
        },
        status: {
            type: String
        },
        scrum_master: {
            type: String
        },

    }

)

module.exports = mongoose.model("projects",ProjectScheme)