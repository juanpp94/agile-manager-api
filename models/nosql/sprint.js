const mongoose = require("mongoose");

const SprintScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        start_date: {
            type: Date
        },
        end_date: {
            type: Date
        },
        plan_tasks: {
            type: Number
        },
        done_tasks: {
            type: Number
        },
        plan_points: {
            type: Number
        },
        done_points: {
            type: Number
        },
    }



)