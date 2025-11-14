import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRouter from "./chat/chat.js";
import prepRouter from "./prep/prep.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/chat", chatRouter);
app.use("/prep", prepRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`IRIS backend running on http://localhost:${PORT}`);
});
