import { add, divide, multiply, subtract } from ".";

test("adds the numbers 1, 2 corectly", () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});
test("substracts the numbers 2, 1 corectly", () => {
  const result = subtract(2, 1);
  expect(result).toBe(1);
});
test("multiplies the numbers 4, 2 corectly", () => {
  const result = multiply(4, 2);
  expect(result).toBe(8);
});
test("divides the numbers 8, 2 corectly", () => {
  const result = divide(8, 2);
  expect(result).toBe(4);
});
test("divides returns 'You should not do this!' if user divides by 0", () => {
  const result = divide(8, 0);
  expect(result).toBe("You should not do this!");
});
