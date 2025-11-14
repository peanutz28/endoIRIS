import express from "express";
import multer from "multer";

import { extractPDF } from "../utils/pdf.js";
import { chunkText } from "../utils/chunk.js";
import { embedChunks } from "./rag.js";

const upload = multer();
const router = express.Router();

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded." });
    }

    const buffer = req.file.buffer;

    // Extract text
    const text = await extractPDF(buffer);

    // Chunk text
    const chunks = chunkText(text);

    // Embed & save to vector database
    await embedChunks(chunks);

    res.json({
      success: true,
      chunksAdded: chunks.length,
      message: "PDF uploaded and indexed for RAG!"
    });
  } catch (err) {
    console.error("PDF upload error:", err);
    res.status(500).json({ error: "Failed to process PDF." });
  }
});

export default router;
