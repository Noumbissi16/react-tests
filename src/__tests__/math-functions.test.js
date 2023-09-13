import { divide, multiply, substract, sum } from "utils/math-functions";

describe("Maths functions", () => {
  it("sums correctly 2 values", () => {
    expect(sum(1, 1)).toBe(2);
    expect(sum(1, 0)).toBe(1);
    expect(sum()).toBe(0);
  });
  it("substract correctly 2 values", () => {
    expect(substract(1, 1)).toBe(0);
    expect(substract(2, 1)).toBe(1);
    expect(substract(-2, 1)).toBe(-3);
    expect(substract(-2, -1)).toBe(-1);
    expect(substract()).toBe(0);
  });
  it("multiply correctly 2 values", () => {
    expect(multiply(1, 1)).toBe(1);
    expect(multiply(2, 1)).toBe(2);
    expect(multiply(-2, 1)).toBe(-2);
    expect(multiply(-2.2, -1.1)).toBe(2.42);
    expect(multiply(-1.7, 3)).toBe(-5.1);
    expect(multiply()).toBe(0);
  });
  it("divide correctly 2 values", () => {
    expect(() => divide()).toThrowError("You can't divide by zero");
    expect(divide(2, 2)).toBe(1);
    expect(divide(-2, 1)).toBe(-2);
    expect(divide(-2, -1)).toBe(2);
  });
});
