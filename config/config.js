const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = 'mongodb://localhost:27017/hotel-transylvania';
    await mongoose.connect(mongoURI);
    console.log('✅ MongoDB Connected...');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
