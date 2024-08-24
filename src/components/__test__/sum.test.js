import { Sum } from "../sum";
test("sum function should calculate the sum of two numbers", () =>
{
    const result = Sum(3, 4);
    //assertion
    expect(result).toBe(7);
});