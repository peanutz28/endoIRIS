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
    const {
      symptoms,
      periodPain,
      pelvicPain,
      intercoursePain,
      bowelPain,
      cycleGI,
      infertilityImpact
    } = req.body;

    const files = req.files;

    let combinedText = "";
    for (const f of files) {
      const text = await extractTextFromPDF(f.path);
      combinedText += "\n" + text;
    }

    const chunks = chunkText(combinedText);
    await embedChunks(chunks);

    const ragContext = await queryRAG(symptoms);

    // Pass survey values to Claude
    const result = await runScreenerLLM(
      symptoms,
      ragContext,
      {
        periodPain,
        pelvicPain,
        intercoursePain,
        bowelPain,
        cycleGI,
        infertilityImpact
      }
    );

    res.json(result);

  } catch (err) {
    console.error("Screener error:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;