import express from "express";
import Anthropic from "@anthropic-ai/sdk";

const router = express.Router();

const IRIS_SYSTEM_PROMPT = `
You are IRIS, an empathetic AI medical assistant specializing in endometriosis.
You help users:
- understand symptoms
- track pain patterns
- prep for doctor visits
- get safe, non-diagnostic guidance

Never give medical orders. Provide education and supportive guidance.
`;

const client = new Anthropic({
  apiKey: "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"
});

router.post("/", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required." });
  }

  try {
    const response = await client.messages.create({
      model: "claude-3-7-sonnet-20250219",
      max_tokens: 300,

      // 🔥 SYSTEM PROMPT GOES HERE NOW
      system: IRIS_SYSTEM_PROMPT,

      messages: [
        { role: "user", content: message }
      ]
    });

    res.json({ reply: response.content[0].text });
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ error: "Claude request failed." });
  }
});

export default router;
