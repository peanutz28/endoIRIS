import { Router } from "express";
import Anthropic from "@anthropic-ai/sdk";

const router = Router();
const client = new Anthropic({ apiKey: process.env.CLAUDE_API_KEY });

// POST /chat
router.post("/", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const reply = await client.messages.create({
      model: "claude-3-5-sonnet",
      max_tokens: 300,
      messages: [{ role: "user", content: userMessage }]
    });

    res.json({
      reply: reply.content[0].text
    });

  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ error: "Chat route failed." });
  }
});

export default router;
