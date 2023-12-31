const mongoose = require('mongoose');
const supertest = require('supertest'); //api testing
const {app} = require('../app');

beforeEach(async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/club5test');
    console.log('connected to db');
})
afterEach(async()=>{
    await mongoose.connection.close();
    console.log('db connection closed');
})

describe("product api test ",()=>{

    const product ={
        name:"test product",
        price:100,
        qty:10
    }

    describe("get product routes",()=>{

            describe("given product does not exist",()=>{

                it("should return 404",async()=>{

                    expect(true).toBe(true) // dummy test
                    const res = await supertest(app).get("/product/product")
                    expect(res.status).toBe(200)
                    expect(res.body.data).toBeInstanceOf(Array)
                    expect(res.body.data.length).toBeGreaterThan(0)

                })

            })
            test("add product",async()=>{
                const res = await supertest(app).post("/product/create").send(product)
                expect(res.status).toBe(201)
            })

    })


})
afterAll(async()=>{
    //delete all data from db
})
