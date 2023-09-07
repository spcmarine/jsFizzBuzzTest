const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz', () => {
    it('If num % 15 === 0, then return "FizzBuzz"', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
    it('If num % 5 === 0, then return "Buzz"', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });
    it('If num % 3 === 0, then return "Fizz"', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });
    it('If num is not % === 0, then return the num', () => {
        expect(fizzBuzz(8)).toBe(8);
    });
});