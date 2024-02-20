const {arrayTotal} = require('./array');

test('It sum all the elements of an Array', () => {
    const arr = [3, 1, 4, 2, 5];
    const sum = arrayTotal(arr);
    expect(sum).toBe(15);
});
test('Returns zero if empty array provided', () => {
    const arr = [];
    const sum = arrayTotal(arr);
    expect(sum).toBe(0);
});
test('Returns the same number if array has only one Number', () => {
    const arr = [6];
    const sum = arrayTotal(arr);
    expect(sum).toBe(6);
});