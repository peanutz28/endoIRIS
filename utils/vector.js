import fs from "fs";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY
});

const DB_PATH = "./utils/vector.json";

// Load existing DB or create empty
let DB = fs.existsSync(DB_PATH)
  ? JSON.parse(fs.readFileSync(DB_PATH, "utf8"))
  : [];

export async function embedText(text) {
  const res = await client.embeddings.create({
    model: "claude-3-5-haiku-20241022",
    input: text
  });
  return res.embedding;
}

export async function addToDB(item) {
  DB.push(item);
  fs.writeFileSync(DB_PATH, JSON.stringify(DB));
}

function cosineSim(a, b) {
  const dot = a.reduce((s, v, i) => s + v * b[i], 0);
  const magA = Math.sqrt(a.reduce((s, v) => s + v * v, 0));
  const magB = Math.sqrt(b.reduce((s, v) => s + v * v, 0));
  return dot / (magA * magB);
}

export async function searchDB(queryEmbedding, k = 5) {
  return DB.sort((x, y) =>
    cosineSim(y.embedding, queryEmbedding) -
    cosineSim(x.embedding, queryEmbedding)
  ).slice(0, k);
}
