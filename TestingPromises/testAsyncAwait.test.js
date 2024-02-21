//fetchUserData.test.js
const fetchUserData = require("./fetchUserData");
test("Testing fetchUserData with valid API for user id 2", async () => {
  const result = await fetchUserData();
  expect(result).toHaveProperty("id", 2);
  expect(result).toHaveProperty("email", "alex.ferguson@infogen.com");
});
test("Testing fetchUserData with invalid API", async () => {
  try {
    await fetchUserData("http://localhost:4000/3");
  } catch (error) {
    expect(error.message).toMatch("Failed to fetch data");
  }
});
