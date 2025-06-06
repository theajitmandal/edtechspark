const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['admin','student'],
    default: 'student'
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
