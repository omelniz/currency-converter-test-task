import { types, flow, getEnv } from "mobx-state-tree";

export const Rate = types
  .model({
    asset: types.string,
    date: types.string,
    quote: types.string,
    isActive: false,
  })
  .actions((self) => ({
    toggleFavorite() {
      self.isActive = !self.isActive;
    },
  }));

const Rates = types
  .model({
    items: types.array(Rate),
  })
  .views((self) => ({
    get getSorted() {
      return self.items.slice().sort((item) => (item.isActive ? -1 : 1));
    },
  }))
  .actions((self) => ({
    fetchAll: flow(function* fetchAll() {
      try {
        const rates = yield getEnv(self).request({ action: "quote" });
        self.items = rates;
      } catch (err) {}
    }),
  }));

export default Rates;
