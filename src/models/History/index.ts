import { types, flow, getEnv } from "mobx-state-tree";

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
  .actions((self) => ({
    fetchAll: flow(function* fetchAll() {
      try {
        const history = yield getEnv(self).request({ action: "history" });

        self.items = history;
      } catch (err) {}
    }),
  }));

export default History;
