import express from "express";
import cors from "cors";
import chatRoute from "./chat/chatRoute.js";
import prepRoute from "./prep/prepRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/chat", chatRoute);
app.use("/prep", prepRoute);

const PORT = 5001;
app.listen(PORT, () => {
  console.log("IRIS backend running on port " + PORT);
});
