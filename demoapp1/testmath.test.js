const { sum, mul, sub, div } = require("./testmath");

test("Adding 1+1 equels 2", () => {
    expect(sum(1, 1)).toBe(2)
});

test("Multiplying 1*1 equels 1", () => {
    expect(mul(1, 1)).toBe(1)
});

test("Substracting 1-1 equesla 0", () => {
    expect(sub(1, 1)).toBe(0)
});

test("Dividing 1/1 equals 1", () => {
    expect(div(1, 1)).toBe(1)
});