const mongoose = require("mongoose");

// to create structure of database record/document
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// to create a user model for collection of document
const User = mongoose.model("User", userSchema); // User defined the collection name
module.exports = User;
