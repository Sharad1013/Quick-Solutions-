const mongoose = require(`mongoose`);
// const URI = `mongodb://127.0.0.1:27017/quick_solutions`;
const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log(`DataBase Connection Successful Synchronizing all Data`);
  } catch (error) {
    console.log(`DataBase Connection Failed!!`);
  }
};

module.exports = connectDB;
