// __tests__/fetchUserData.test.js
const fetchUserData = require("./fetchUserData");
// testing resolve
test("fetchUserData resolves with user data for userId 1", () => {
  return expect(fetchUserData(1)).resolves.toEqual({
    id: 1,
    username: "user1"
  });
});
// testing reject
test("fetchUserData rejects with an error message for userId other than 1", () => {
  return expect(fetchUserData(2)).rejects.toMatch("User not found");
});

