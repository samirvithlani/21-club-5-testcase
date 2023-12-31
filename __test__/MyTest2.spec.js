describe("referance equality", () => {
  test("object should contain age 23", () => {
    let user = {
      id: 1,
      age: 23,
    };

    expect(user).toEqual({ id: 1, age: 23 });
  });

  test("check object data types", () => {
    let user = {
      name: "john",
      age: 23,
    };

    expect(user).toMatchObject({
      name: expect.any(String),
      age: expect.any(Number),
    });
  });
});
