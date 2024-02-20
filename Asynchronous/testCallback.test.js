// testcallback.test.js
const fetchData = require("./fetchData"); // Import the function to be tested
test("fetchData invokes the callback with the expected data", (done) => {
  function callback(data) {
    expect(data).toEqual({ name: "John", age: 30 });
    done(); // Call 'done' to indicate that the test is complete
  }
  fetchData("https://example.com/api/data", callback);
}, 5100); // Set a longer timeout (e.g., 5100 milliseconds)C
