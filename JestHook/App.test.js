let users = [
  { name: "Alice", age: 30 },
  { name: "Lallu", age: 20 },
  { name: "Ronnie", age: 35 },
  { name: "Boby", age: 45 },
  { name: "Charlie", age: 21 }
];
// beforeEach()

beforeEach(() => {
  users = [
    { name: "Alice", age: 30 },
    { name: "Lallu", age: 20 },
    { name: "Ronnie", age: 35 }
  ];
});

describe("users Array", () => {
  test("should add users to end of array", () => {
    const newUser = { name: "gabbo", age: 26 };
    users.push(newUser);
    expect(users[users.length - 1]).toBe(newUser);
  });
  test("should add user to beginning of array", () => {
    const newUser = { name: "Eve", age: 45 };
    users.unshift(newUser);
    expect(users[0]).toBe(newUser);
  });
  test("should have initial length of 3", () => {
    expect(users.length).toBe(3);
  });
});
