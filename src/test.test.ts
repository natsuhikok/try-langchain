import config from "config";
import { doSomething } from "~/src/test";

test("テストのテスト。", async () => {
  doSomething();
  expect(1 + 1).toBe(2);
}, 10000 * 10);
