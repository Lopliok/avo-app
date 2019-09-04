const file = require('../Test');

test('adds 1 + 2 to equal 3', () => {
    expect(file.sum(1, 2)).toBe(3);
});