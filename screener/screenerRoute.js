import express from "express";
import multer from "multer";
import { extractTextFromPDF } from "../utils/pdf.js";
import { chunkText } from "../utils/chunk.js";
import { embedChunks, queryRAG } from "./rag.js";
import runScreenerLLM from "./screenerPrompt.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/run", upload.array("files"), async (req, res) => {
  try {
    const { symptoms } = req.body;
    const files = req.files;

    let combinedText = "";

    for (const f of files) {
      combinedText += "\n" + await extractTextFromPDF(f.path);
    }

    const chunks = chunkText(combinedText);
    await embedChunks(chunks);

    const ragContext = await queryRAG(symptoms);
    const result = await runScreenerLLM(symptoms, ragContext);

    res.json(result);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;