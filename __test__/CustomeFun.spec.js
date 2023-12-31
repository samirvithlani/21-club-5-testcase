const {sum,deleteUserById,findUserById} = require('../helper/helper');

beforeAll(()=>{
    console.log("before all");
})

beforeEach(()=>{
    console.log("before each");
})

afterEach(()=>{
    console.log("after each");
})

afterAll(()=>{

    console.log("after all ******************");
})

describe('Test custome function',()=>{

    test("sum function",()=>{
        expect(sum(1,2)).toBe(3);
    })

    test("delete User By Id ",()=>{

        const arr=[
            {id:1,name:"A"},
            {id:2,name:"B"},
            {id:3,name:"C"},
        ]
        
        expect(deleteUserById(arr,2)).toEqual([
            {id:1,name:"A"},
            {id:3,name:"C"},
        ])
    })
    test("delte user by id check len after delete",()=>{

        const arr=[
            {id:1,name:"A"},
            {id:2,name:"B"},
            {id:3,name:"C"},
        ]

        expect(deleteUserById(arr,1).length).toBe(2);

    })

    test("find user by id",()=>{
        const users = [
            {
                id:1,
                name:"A"
            
            },
            {
                id:2,
                name:"B"
            },
            {
                id:3,
                name:"C"
            }
        ]

        expect(findUserById(users,1)).toEqual({
            id:1,
            name:"A"
        })

    })


})
//before every test case  i need db connection....
//after every test case i need to close db connection...
//after all test case i need to delete all data from db...
//before all test case i need to create db connection...