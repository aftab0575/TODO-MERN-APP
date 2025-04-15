import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';

// ✅ Load env vars
config();

const app = express();

// ✅ Setup proper CORS
const allowedOrigins = ['https://todo-mern-app-frontend.vercel.app'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));

// ✅ Body parser
app.use(express.json());

// ✅ MongoDB connection
connectDB();

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

// ✅ Optional test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// ❌ No app.listen on Vercel
export default app;
