import app from "./server/app.js";
import "dotenv/config";
import pool from "./db/config.db.js";

const SERVER_PORT = process.env.SERVER_PORT;

await pool.query("select now()").then((result) => {
  console.log("--------------------------------");
  console.log("Database successfully connected:", result.rows[0].now);
  console.log("--------------------------------");
  
  app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
  })
}).catch((error) => {
  console.error("Database connection failed:", error);
});
