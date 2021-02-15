const checkIfEqual = require('/Users/soulprosinclair/Desktop/Assigns/Jest-Another-RPG/lib/random');

test('checks if 10 is equal to 10', () => {
  expect(checkIfEqual(10, 10)).toBe(true);
});