import express, { json } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';

const allowedOrigins = ['https://todo-mern-app-frontend.vercel.app']; // ✅ frontend

config();
const app = express();

// ✅ Proper CORS config
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

// ✅ MongoDB connection
connectDB();

// ✅ Body parser
app.use(json());

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

// ✅ Default test route
app.get('/', (req, res) => {
  res.send('Welcome, API is running...');
});

// ❌ Don't use app.listen() on Vercel
export default app;
