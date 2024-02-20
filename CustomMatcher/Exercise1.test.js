
expect.extend({
  toStartWith(received, argument) {
    const pass = received.startsWith(argument);
    if (pass) {
      return {
        pass: true,
        message: () => `Expected "${received}" not to start with "${argument}"`,
      };
    } else {
      return {
        pass: false,
        message: () => `Expected "${received}" to start with "${argument}"`,
      };
    }
  },
});

test("Check if given string starts with substring", () => {
    const inputString = 'Hello Jest!!';
    const expectedString  = 'Hello';
    expect(inputString).toStartWith(expectedString);
});
test("Check if string does not start with substring ", () => {
    const inputString = "JavaScript is awesome";
    const unexpectedSubstring = "Java";
    expect(inputString).toStartWith(unexpectedSubstring)
});
