import config from "config";
import { OpenAI } from "langchain/llms/openai";

export function getOpenAIModel() {
  return new OpenAI({
    openAIApiKey: config.get("OPEN_AI_API_SECRET"),
    temperature: 0.9,
  });
}
