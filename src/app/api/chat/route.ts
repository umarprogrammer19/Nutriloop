import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are NutriBot, a helpful assistant for NutriLoop — a smart kitchen appliance that transforms organic kitchen waste into nutrient-rich powder.

Key facts about NutriLoop:
- Converts organic kitchen waste (fruit peels, vegetable scraps, eggshells, coffee grounds, tea leaves) into nutrient-rich powder
- Uses 72°C steam sanitization that eliminates 99.9% of bacteria and pathogens
- Processing time: 40–80 minutes per cycle
- Capacity: 2–5 kg per batch
- Achieves 90% waste reduction
- 100% eco-friendly and odor-free operation
- Juicer-sized, designed for compact kitchens and apartments
- Uses AI with smart sensors to monitor temperature, humidity, and waste composition
- The powder output can be used as plant fertilizer, garden soil enricher, or for community composting
- Built with advanced mechatronics and sustainable processing technology

Answer questions about NutriLoop clearly and concisely. For questions unrelated to NutriLoop or sustainability/nutrition topics, politely redirect to NutriLoop-related topics. Keep responses short and friendly.`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-3.1-flash-lite",
      systemInstruction: SYSTEM_PROMPT,
    });

    const result = await model.generateContent(message);
    const text = result.response.text();

    return NextResponse.json({ reply: text });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[chat API]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
