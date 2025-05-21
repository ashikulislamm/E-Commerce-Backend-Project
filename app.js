import 'dotenv/config';
import express from 'express';
import cors from 'cors'; 
import router from './src/routes/api.js';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(helmet());

app.use



// ROUTES ENTRY
app.use('/api/v1', router)

export default app;