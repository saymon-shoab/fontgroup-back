import express from 'express';
import cors from 'cors';
import { fontRouter } from './routes/font.routes.js';
import { fontGroupRouter } from './routes/fontGroup.routes.js';
import globalErrorHandler from './middleware/globalErrorHandler.js';

const app = express();
app.use(cors());
app.use(express.json());

// api routes...
app.use("/api/v1/fonts", fontRouter);
app.use("/api/v1/fontGroup", fontGroupRouter);

// global error handler 
app.use(globalErrorHandler)

// Not found API
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API not found",
      },
    ],
  });
});


export default app;
