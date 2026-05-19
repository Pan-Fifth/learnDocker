import { GoogleGenAI } from "@google/genai";
import "dotenv/config"

const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);

export default async function main(prompt) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });
    console.log(response);
    return response.text
}

