import express from "express";
import cors from "cors";

import chatRouter from "./chat/chat.js";
import prepRouter from "./prep/prep.js";
import screenerRouter from "../../screener/screenerRoute.js";  

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/chat", chatRouter);  // <-- chatbot route

// health check
app.get("/", (req, res) => {
  res.send("EndoIRIS backend is running ✨");
});
app.use("/screener", screenerRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
