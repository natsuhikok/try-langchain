import { searchByAgent } from "~/src/searchByAgent";

test("search agent test.", async () => {
  await searchByAgent();
  expect(1 + 1).toBe(2);
}, 10000 * 10);
