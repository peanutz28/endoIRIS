import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: "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"
});

async function runTest() {
  try {
    const msg = await client.messages.create({
      model: "claude-3-7-sonnet-latest",
      max_tokens: 200,
      messages: [
        {
          role: "user",
          content: "Say hi like a friendly medical assistant named IRIS."
        }
      ]
    });

    console.log("Claude reply:\n", msg.content[0].text);
  } catch (err) {
    console.error("Error calling Claude:", err);
  }
}

runTest();
