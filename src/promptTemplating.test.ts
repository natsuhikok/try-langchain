import { promptTemplateSample } from "~/src/promptTemplateSample";

test("prompt TemplateSample", async () => {
  await promptTemplateSample();
  expect(1 + 1).toBe(2);
}, 10000 * 10);
