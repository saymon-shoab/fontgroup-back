import express from 'express';
import cors from 'cors';
import { fontRouter } from './routes/font.routes.js';
import { fontGroupRouter } from './routes/fontGroup.routes.js';





const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/fonts", fontRouter);
app.use("/api/v1/fontGroup", fontGroupRouter);

export default app;
