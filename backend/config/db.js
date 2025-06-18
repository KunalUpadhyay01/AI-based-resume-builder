const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.DB_URL, {});
    console.log("MongoDB Connected")
  } catch (err) {
    console.log("Error Connecting To MongoDB",err);
    process.exit();
  }
};

module.exports = connectDB;