// import { mistral } from "@ai-sdk/mistral";
// import { generateText } from "ai";

// // Allow up to 30 seconds for responses
// export const maxDuration = 30;

// export async function POST(req: Request) {
//   const { messages } = await req.json();

//   const { text } = await generateText({
//     model: mistral("mistral-large-latest", {
//       apiKey: process.env.API_KEY, // Use your API key from .env.local
//     }),
//     system:
//       "You are a helpful assistant for an archaeological website. You can answer questions about archaeology, historical sites, and related topics.",
//     messages,
//   });

//   return new Response(JSON.stringify({ text }), {
//     headers: { "Content-Type": "application/json" },
//   });
// }
