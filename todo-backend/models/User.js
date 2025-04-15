import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, // New field
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  todoCount: { type: Number, default: 0 } // New field
});

const User = mongoose.model('User', userSchema);
export default User;
