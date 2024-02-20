
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

// toContain()  -> it checks the specific item is present in array or not

test('Checkin the Array elements ', () => {
    const names = ['Sam','Peter','Cherry',"Romie"];
    expect(names).toContain('Romie');
});

// toHaveLength Matcher: It checkes the numbers array has requested length or not.

test('Checking Array Length', () => {
    const numbers = [39,3,7,88,11, 22, 13, 24, 5];
    expect(numbers).toHaveLength(9);
});

// toMatch Matcher: It checks if the sentence string contains the specific word using a regular Expression pattern

it('Matching strings with regEx', () => {
    const str = " dhwl dwjcvhdw whcqw whcgl lorem wegflw hwgef";
    expect(str).toMatch('lorem')
 });

//  toThrow Matcher:  This test verifies that the throwError function throws an error message 
    // that matches 'Something went wrong'.

function throwError(){
    throw new Error('Something went wrong');
}
it('Throwig an Error', () => {
    expect(throwError).toThrow("Something went wrong");
})