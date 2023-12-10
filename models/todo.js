
const mongoose = require("mongoose") // requiring the mongoose package

const todoSchema = new mongoose.Schema({
  // creating a schema for todo
  task: {
    // field1: task
    type: String , // task is a string
    unique: true, // it has to be unique
    required: true,
    default: "clearning"
  },
  completed: {
    // field2: completed
    type: Boolean, // it is a boolean
    default: false, // the default is false
  },
})

const todoModel = mongoose.model("loool", todoSchema) // creating the model from the schema

module.exports = todoModel // exporting the model