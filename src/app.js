import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import taksRoutes from './routes/task.routes.js'
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", taksRoutes);

export default app;