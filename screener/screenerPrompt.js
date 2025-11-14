import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY
});

export default async function runScreenerLLM(symptoms, context, survey) {
  const systemPrompt = `
You are EndoIRIS, a clinical-pattern screener for possible endometriosis.
You DO NOT diagnose. You only detect patterns supported by the evidence.

Use BOTH:
1. The user's written symptom description
2. The numeric survey scores

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

SURVEY (0–10 scores):
- Period pain severity: ${survey.periodPain}
- Pelvic pain intensity: ${survey.pelvicPain}
- Pain during intercourse: ${survey.intercoursePain}
- Painful bowel movements during periods: ${survey.bowelPain}
- Urinary/GI symptoms around cycle: ${survey.cycleGI}
- Infertility difficulty impact: ${survey.infertilityImpact}

DOCUMENT EXTRACTS:
${context}
        `
      }
    ],
    max_tokens: 1000
  });

  return JSON.parse(msg.content[0].text);
}