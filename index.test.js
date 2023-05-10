const { describe } = require('yargs');
const reversedString = require('./index.js');
const stringLength = require('./index.js')
const { default: expect } = require('expect');

test('A function to return number of characters in a string', () => {
   expect(stringLength('Tuma')).toBe(4);
})

test('A function to check less numbers of characters', () =>  {
   expect(() => stringLength('')).toThrow("The string has no characters");
})
 test('A function to check high numbers of characters', () =>  {
     expect(() => stringLength('No body is like you aprt from your twin')).toThrow("The string has a lot of characters boss");
})

test('input must be reversed', () => {
     expect(reversedString("tumaini") === "iniamut")
});


    