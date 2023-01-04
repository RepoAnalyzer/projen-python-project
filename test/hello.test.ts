const sayHello = () => {
  return "hello, world!";
};

test("hello", () => {
  expect(sayHello()).toBe("hello, world!");
});
