
import { suma } from "../leetcode/hashes/twosum";
import { twosum } from "../leetcode/hashes/twosum";

test("suma", () =>{
    const result = suma(2,2);
    expect(result).toBe(4);
})

test("Suma a la 2", () => {
    const result = suma(5,4);
    expect(result).toBe(9)
})