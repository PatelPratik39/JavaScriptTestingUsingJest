// fetchData.js
function fetchData(url, callback) {
  // Simulate an asynchronous operation, like fetching data from a server
  console.log(url);
  setTimeout(function () {
    const data = { name: "John", age: 30 };
    callback(data); // Call the callback function with the fetched data
  }, 5000); // Simulated delay of 5 seconds
}
function displayData(data) {
  console.log(`Name: ${data.name}, Age: ${data.age}`);
}
// Export the fetchData function (not necessary for the test file)
module.exports = fetchData;

