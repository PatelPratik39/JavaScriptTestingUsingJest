// // src/fetchUserData.js
// function fetchUserData(userId) {
//   return new Promise((resolve, reject) => {
//     if (userId === 1) {
//       resolve({ id: 1, username: "user1" });
//     } else {
//       reject("User not found");
//     }
//   });
// }
// module.exports = fetchUserData;

// src/fetchUserData.js
async function fetchUserData() {
  try {
    const response = await fetch("http://localhost:4000/data/2");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error; // Throwing the original error
  }
}
module.exports = fetchUserData;
