import{Sum} from "../Sum";

test("sum function should calculate the sum of the number",()=>{
    const result =Sum(3,4);

    expect(result).toBe(7);
})