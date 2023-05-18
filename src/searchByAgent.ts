import config from "config";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import { getOpenAIModel } from "~/src/getOpenAIModel";


export async function searchByAgent() {
  const model = getOpenAIModel();
  const tools = [
    new SerpAPI(config.get("SERP_API_KEY"), {
      location: "Austin,Texas,United States",
      hl: "en",
      gl: "us",
    }),
    new Calculator(),
  ];

  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "zero-shot-react-description",
  });
  console.log("Loaded agent.");

  const input =
    "Who is Olivia Wilde's boyfriend?" +
    " What is his current age raised to the 0.23 power?";
  console.log(`Executing with input "${input}"...`);

  const result = await executor.call({ input });

  console.log(`Got output ${result.output}`);
}
