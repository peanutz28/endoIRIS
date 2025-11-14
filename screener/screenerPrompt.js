import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY
});

export default async function runScreenerLLM(symptoms, context) {
  const systemPrompt = `
You are EndoIRIS, a clinical-pattern screener for possible endometriosis.
You DO NOT diagnose. You only detect patterns supported by the evidence.

Return strict JSON:
{
 "pattern_alignment": "",
 "cycle_phase_relevance": "",
 "red_flags": "",
 "possible_subtypes": "",
 "misdiagnosis_pitfalls": "",
 "evidence_quotes": []
}
`;

  const msg = await client.messages.create({
    model: "claude-3-5-sonnet-20241022",
    system: systemPrompt,
    messages: [
      {
        role: "user",
        content: `
SYMPTOMS:
${symptoms}

DOCUMENT EXTRACTS:
${context}
        `
      }
    ],
    max_tokens: 900
  });

  const text = msg.content[0].text;
  return JSON.parse(text);
}