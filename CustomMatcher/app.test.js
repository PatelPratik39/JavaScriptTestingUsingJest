// The holdValue function returns an object with two properties: pass and message.

const holdValue = (array, value) => ({
  // The pass property is a Boolean that indicates whether the matcher passed or failed.
  pass: array.includes(value),
  // The message property is a function that returns a string message to be displayed when the matcher fails.
  message: () => `Expected Array to contain ${value}`
});

// This method takes an object with the custom matcher function as a property.
expect.extend({ holdValue });

test('checking whether given value is present in array', () => {
    const arr = [1,2,3,4,6];
    expect(arr).holdValue(6);
});
test("Checking whether given value is not present in array", () => {
  const arr = [1, 2, 3];
  expect(arr).not.holdValue(5);
}); 