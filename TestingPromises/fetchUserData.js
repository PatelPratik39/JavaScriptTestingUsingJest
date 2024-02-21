// src/fetchUserData.js
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    if (userId === 1) {
      resolve({ id: 1, username: "user1" });
    } else {
      reject("User not found");
    }
  });
}
module.exports = fetchUserData;
