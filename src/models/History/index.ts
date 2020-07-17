import { types, flow, getEnv } from "mobx-state-tree";
import smartSort from "./sorting-algorithm";

export const HistoryRecord = types.model({
  asset: types.string,
  startDate: types.string,
  startQuote: types.string,
  finishDate: types.string,
  finishQuote: types.string,
  profit: types.string,
});

const History = types
  .model({
    items: types.array(HistoryRecord),
  })
  .views((self) => ({
    get all() {
      return self.items.slice();
    },
  }))
  .actions((self) => ({
    fetchAll: flow(function* fetchAll() {
      try {
        const response = yield getEnv(self).request({ action: "history" });

        self.items = smartSort(response.deals);
      } catch (err) {}
    }),
  }));

export default History;
