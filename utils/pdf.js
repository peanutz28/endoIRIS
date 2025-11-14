import fs from "fs";
import pdfParse from "pdf-parse";

export async function extractTextFromPDF(filePath) {
  const data = fs.readFileSync(filePath);
  const pdf = await pdfParse(data);
  return pdf.text;
}