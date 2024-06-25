import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js'; // Ensure this is correctly imported

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }
    
    const fullUri = `${uri}/${DB_NAME}`;
    console.log('Connecting to MongoDB with URI:', fullUri); // Debug log

    const connectInstance = await mongoose.connect(fullUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connection established', connectInstance.connection.host);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

export default connectDB;
