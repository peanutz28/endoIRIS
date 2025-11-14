import fs from "fs";
import pdfParse from "pdf-parse";

export async function extractPDF(buffer) {
  const data = await pdfParse(buffer);
  return data.text;
}
