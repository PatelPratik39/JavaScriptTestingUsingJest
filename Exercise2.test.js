
// create a simple function that finds Even Numbers from an array
const findEvenNumber = (numbers) => {
    return numbers.filter(number => number % 2 === 0);
}

// Test case using Jest
describe('find EvenNumbers ', () => {
    // test case 1
    test('return all even number ', () => {
      const arr = [1,2,3,4,5,6,7,8,9,0];
      const result = findEvenNumber(arr);
      expect(result).toEqual([2,4,6,8,0])
    })
    
    // test case 2
    test('return an empty array if no even numbers found ', () => {
      const arr = [1, 3, 5, 7, 9];
      const result = findEvenNumber(arr);
      expect(result).toEqual([]);
    })
    
})