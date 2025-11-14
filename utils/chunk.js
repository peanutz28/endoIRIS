export function chunkText(text, size = 500) {
  const words = text.split(" ");
  const chunks = [];
  let current = [];

  for (const w of words) {
    current.push(w);
    if (current.join(" ").length > size) {
      chunks.push(current.join(" "));
      current = [];
    }
  }

  if (current.length) chunks.push(current.join(" "));
  return chunks;
}