import config from "../config/index.js";

const globalErrorHandler = (err, req, res) => {
  // Default values
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong';

  // Log the full error in development
  if (config.env !== 'production') {
    console.error('🔥 Global Error:', err);
  }

  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV !== 'production' ? err.stack : undefined,
  });
};

export default globalErrorHandler;
