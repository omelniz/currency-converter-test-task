import createStore from "./store";

it("should import all models", () => {
  const store = createStore();

  expect(Object.keys(store.toJSON())).toEqual(["auth", "rates", "history"]);
});
