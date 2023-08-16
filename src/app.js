import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import taksRoutes from './routes/task.routes.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();
app.use(cors({
    origin : "http://127.0.0.1:5173",
    credentials : true,
}));
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", taksRoutes);

export default app;