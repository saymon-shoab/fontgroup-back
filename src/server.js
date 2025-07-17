import mongoose from "mongoose"
import config from "./config/index.js" 
import app from "./app.js";



(async function DB_Connect() {
    await mongoose.connect(config.database_url);
    console.log('✅ Connected to mongoDB')

    app.listen(config.port, () => {
    console.log(`🚀 Server running on port ${config.port}`);
  });
})()