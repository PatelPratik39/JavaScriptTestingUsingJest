const multiply = require("./myModule");

test("multiplies 5 * 2 to equals 10", () => {
  expect(multiply(5, 2)).toBe(10);
});

// check truth or falsy matcher

test("Checking truthiness and falsiness", () => {
    const val1 = true;
    const val2 = null;
    expect(val1).toBeTruthy();
    expect(val2).toBeFalsy();
});

/*
Anatomy of the above test function

1. test keyword indicated that this function is test function
2. first parameter of test function is optional description
3. The assertion is the statement which starts from expect where we are checking that the conditions are passing Or Not.
*/

/*

// created a test suite by using describe() which is used to group multiple test cases.
describe("My Test Suite", () => {
  // beforAll() -> this method will run before all the tests in this suite
  beforAll(() => {

  });

  // afterAll() -> This method will run after all the test in this suite
  afterAll(() => {

  });

  // beforeEach() -> This method will run before each test in this suite
  beforeEach(() => {

  });

  // afterEach() -> This method will run after each test in this suite
  afterEach(() => {

  });

  //   test
  test("My test 1", () => {
    expect(someValue).toBe(expectedValue);
  });

  test("My test 2", () => {
    expect(anotherValue).toEqulas(expectedValue);
  });
});


*/