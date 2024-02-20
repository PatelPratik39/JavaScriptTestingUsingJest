const arr = [1, 2, 3];

// 1.    Test that the array contains only specific values

test("Test that the array contains only specific values", () => {
  const specificValues = [1, 2, 3];
  // expect(arr).toContain(2);
  expect(arr.every((value) => specificValues.includes(value))).toBe(true);
});

// 2.    Test that the array contains at least one of the specific values
test("Test that the array contains at least one of the specific values", () => {
    const specificValues = [1, 2, 3];
    expect(arr.some(value => specificValues.includes(value))).toBe(true);
});

// 3.    Test that the array contains no duplicates
test("Test that the array contains no duplicates", () => {
     const specificValues = [1, 2, 3];
     expect(arr.length == new Set(arr).size).toBe(true)
});

// 4.    Test that the array is not empty
test('Array is not Empty', () => {
    expect(arr.length > 0).toBe(true);
})
// 5.    Test that the array is not null or undefined

test("array is not null or undefined", () => {
    expect(arr).not.toBeNull()
    expect(arr).not.toBeUndefined();
});
