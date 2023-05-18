import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import { getOpenAIModel } from "~/src/getOpenAIModel";

export async function promptTemplateSample() {
  const model = getOpenAIModel();
  const template = "What is a good name for a company that makes {product}?";
  const prompt = new PromptTemplate({
    template: template,
    inputVariables: ["product"],
  });
  const chain = new LLMChain({ llm: model, prompt: prompt });
  const res = await chain.call({ product: "colorful socks" });
  console.log(res);
}
