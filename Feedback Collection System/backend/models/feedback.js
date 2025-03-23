const mongoose = require("mongoose");

// define the schema for our user model
const feedbackSchema = new mongoose.Schema({
  name: String,
  contact: String,
  email: String,
  feedback: String,
});

module.exports = mongoose.model("Feedback", feedbackSchema);
