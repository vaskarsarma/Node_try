const practiceSolution = require('./practiceProblem.js');
const helperFunction = require('./practiceProblem').helperFunction;

describe('practiceSolution', function(){
    it('should exist', function(){
        expect(practiceSolution).toBeDefined();
    });

    it('should be a function', function(){
        expect(practiceSolution).toBeInstanceOf(Function);
    });

    it('should return an array of arrays', function(){
        const result= practiceSolution('testing');
        expect(result).toBeDefined();
        expect(Array.isArray(result)).toBe(true);
        expect(Array.isArray(results[0])).toBe(true);
    })
})