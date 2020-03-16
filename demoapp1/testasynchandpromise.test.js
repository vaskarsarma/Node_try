const { fetchData, uppercase, testCallback } = require('./testasynchandpromise');

describe('Test Callback', () => {
    beforeEach(() => {

    })

    afterEach(() => {

    })

    test(`uppercase 'test' to equal 'TEST'`, () => {
        return uppercase('test').then(str => {
            expect(str).toBe('TEST')
        })
    });

    test("test prmise 1", () => {
        return fetchData().then(data => {
            expect(data).toBe('Vaskar!')
        });
    });

    test(`Test Callback function`, (done) => {
        testCallback('test', (str) => {
            expect(str).toBe('TEST');
            done();
        })
    })

    test(`Error test for empty string`,()=>{
        return uppercase('').catch(e=>{
            expect(e).toMatch('Empty string')
        })
    })

    test(`uppercase 'test' to equal 'TEST' using async/await`, async()=>{
        const str= await uppercase('test');
        expect(str).toBe('TEST');
    })
})