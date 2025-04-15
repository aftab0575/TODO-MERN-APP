import express, { json } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';

config();
const app = express();

//MongoDB connection
connectDB();

app.use(cors());
app.use(json());

//routes
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

//App listening port for local development
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
