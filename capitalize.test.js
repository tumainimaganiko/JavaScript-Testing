const { default: expect } = require('expect');
const capitalize = require('./capitalize.js');

describe('capitalize', () => {
    test('capitalizes the first letter of a string', () => {
      expect(capitalize('tumaini')).toBe('Tumaini');
      expect(capitalize('this is a test')).toBe('This is a test');
      expect(capitalize('1st letter should be capitalized')).toBe('1st letter should be capitalized');
    });
  });