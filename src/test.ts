import { OpenAI } from "langchain/llms/openai";
import config from "config";

export async function doSomething() {
  const model = new OpenAI({
    openAIApiKey: config.get("OPEN_AI_API_SECRET"),
    temperature: 0.9
  });
  const res = await model.call(
    "What would be a good company name a company that makes colorful socks?"
  );
  console.log(res);
}
