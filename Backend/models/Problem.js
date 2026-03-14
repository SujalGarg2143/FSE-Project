const mongoose = require("mongoose")

const problemSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    difficulty: {
        type: String,
        enum: ["Easy", "Medium", "Hard"]
    },

    description: {
        type: String,
        required: true
    },

    exampleInput: String,
    exampleOutput: String,

    category: String

}, { timestamps: true })

module.exports = mongoose.model("Problem", problemSchema)