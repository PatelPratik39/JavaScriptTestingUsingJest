it("Adding numbers", () => {
  expect(2 + 4).toBe(6);
});
it("Number assertions", () => {
  const num = 10;
  expect(num).toBeGreaterThan(5);
  expect(num).toBeLessThan(20);
  expect(num).toBe(10);
  expect(num).not.toBeNaN();
  expect(num).toBeCloseTo(9.99, 1);
});
it("Comparing objects", () => {
  const obj1 = { a: 3, b: 1 };
  const obj2 = { b: 1, a: 3 };
  expect(obj1).toEqual(obj2);
});
test("Checking truthiness and falsiness", () => {
  const value1 = true;
  const value2 = null;
  expect(value1).toBeTruthy();
  expect(value2).toBeFalsy();
});
it("Checking array elements", () => {
  const names = ["sam", "peter", "cherry"];
  expect(names).toContain("peter");
});
it("Checking array length", () => {
  const numbers = [11, 22, 13, 24, 5];
  expect(numbers).toHaveLength(5);
});
it("Matching strings with regex", () => {
  const str1 = "Hello, world";
  expect(str1).toMatch(/world/);
});
function throwError() {
  throw new Error("Something went wrong");
}
it("Throwing an error", () => {
  expect(throwError).toThrow("Something went wrong");
});

