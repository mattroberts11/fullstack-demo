const mongoose = require('mongoose');
const db = require('./dbConnect');
const Schema = mongoose.Schema;

const BugSchema = new Schema({
  bugName: Number,
  bugDescription: String,
  reportedBy: String,
  createdDate: {type: Date, default: Date.now},
  assignedTo: String,
  threatLevel: String,
})

module.exports = mongoose.model('Bug', BugSchema);