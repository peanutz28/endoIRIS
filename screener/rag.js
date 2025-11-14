import { embedText, addToDB, searchDB } from "../utils/vector.js";

export async function embedChunks(chunks) {
  for (const chunk of chunks) {
    const embedding = await embedText(chunk);
    await addToDB({ text: chunk, embedding });
  }
}

export async function queryRAG(query) {
  const qEmbed = await embedText(query);
  const results = await searchDB(qEmbed, 5);
  return results.map(r => r.text).join("\n");
}