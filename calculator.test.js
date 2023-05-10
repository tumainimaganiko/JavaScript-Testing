const calc = require('./calculator.js')

describe('Calculator', () => {
    test('Adding two numbers', () => {
        expect(calc.add(3,2)).toBe(5);
    })
    test('Adding two numbers', () => {
        expect(calc.subtract(3,2)).toBe(1);
    })
    test('Adding two numbers', () => {
        expect(calc.multiply(3,2)).toBe(6);
    })
    test('Adding two numbers', () => {
        expect(calc.divide(5,1)).toBe(5);
    })
})