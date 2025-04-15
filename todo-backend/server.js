import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';

config();
const app = express();

// ✅ CORS must be FIRST and apply to all routes/methods
const allowedOrigins = ['https://todo-mern-app-frontend.vercel.app'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

app.options('*', cors()); // ✅ allow preflight requests from all routes

app.use(express.json());

// ✅ MongoDB
connectDB();

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

// ✅ Root route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// ✅ Export for Vercel
export default app;
