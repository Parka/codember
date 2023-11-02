import { decode } from ".";

test("test1", () => {
  expect(decode("cat dog dog car Cat doG sun")).toBe("cat2dog3car1sun1");
});

test("test2", () => {
  expect(decode("keys house HOUSE house keys")).toBe("keys2house3");
});

test("test3", () => {
  expect(decode("cup te a cup")).toBe("cup2te1a1");
});

test("test4", () => {
  expect(decode("houses house housess")).toBe("houses1house1housess1");
});
