

// Global array to perform array operations on
let testArray = [];

// create a test suite using Describe()

describe("Array Methods", () => {
  // this method will runs before all tests in this suite
  beforeAll(() => {
    console.log("Before All: Setting up global resources or configurations");
    testArray = [1, 2, 3];
  });
  // This code runs after all tests in this suite
  afterAll(() => {
    console.log("After All: Cleaning up global resources or configurations");
    // Reset the test array after all tests
    testArray = [];
  });
  // This code runs before each test case
  beforeEach(() => {
    console.log(
      "Before Each: Setting up test-specific resources or resetting state"
    );
    // Clone the array to ensure each test operates on a fresh copy
    newArray = [...testArray];
  });
  // This code runs after each test case
  afterEach(() => {
    console.log(
      "After Each: Cleaning up test-specific resources or checking post-test conditions"
    );
    // Reset the array after each test
    newArray = [];
  });
  test("Push Element", () => {
    console.log("Running Test Case: Push Element");
    newArray.push(4);
    expect(newArray).toContain(4);
  });
  test("Pop Element", () => {
    console.log("Running Test Case: Pop Element");
    const poppedValue = newArray.pop();
    expect(poppedValue).toBe(3);
  });
  test("Shift Element", () => {
    console.log("Running Test Case: Shift Element");
    const shiftedValue = newArray.shift();
    expect(shiftedValue).toBe(1);
  });
  test("Unshift Element", () => {
    console.log("Running Test Case: Unshift Element");
    newArray.unshift(0);
    expect(newArray).toContain(0);
  });
});

