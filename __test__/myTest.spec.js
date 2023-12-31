//expect

const e = require("express");

test("1 plus 1 is 2", () => {
  
    expect(1 + 1).toBe(2);

});

test("10 plus 10 not to be 20",()=>{

    expect(10+10).not.toBe(21);

})

describe("Test for numbers",()=>{


        test("2 plus 2 is 4",()=>{

            let a = 10, b = 20;
            expect(a+b).toBe(30);

        })

        test("name should be undefined",()=>{

            let name;
            expect(name).toBeUndefined();
        })

        test("age should not to be undefined",()=>{
            let age=20
            expect(age).not.toBeUndefined();
        })

})

describe("Test for number comparision",()=>{

    test("should be greater than",()=>{
        let age = 19;
        expect(age).toBeGreaterThan(18);
        
    })
    // toBeGreaterThanOrEqual
    // toBeLessThan
    // toBeLessThanOrEqual
    // toBeCloseTo
    test("number to be close to",()=>{
        let value = 100 + 21.23;
        //change expected difference to 10
        //expect(value).toBeCloseTo(121.23,1);
        expect(value).toBeCloseTo(121.23);
    })


})

describe("Test for string",()=>{

    test("contact should macth",()=>{
        let contact = "8460224296";
        expect(contact).toMatch(/[6-9]{1}[0-9]{9}/);
    })


    test("contact should not macth",()=>{

        let name = "dont go there";
        expect(name).not.toMatch(/p/);
    })


    test("array contains",()=>{
        let arr = ["one","two","three"];
        expect(arr).toContain("one");
    })

    test("array length",()=>{
        let arr = ["one","two","three"];
        expect(arr.length).toBe(3);
    })


})
