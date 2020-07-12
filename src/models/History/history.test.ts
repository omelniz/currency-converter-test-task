import History, { HistoryRecord } from "./index";
import { items } from "./../../features/history/HistoryTable/history.mock";

describe("HistoryRecord", () => {
  it("should create correct model", () => {
    const rate = HistoryRecord.create(items[0]);

    expect(rate.toJSON()).toEqual(items[0]);
  });
});

describe("History", () => {
  it("should create corrent list of rates", () => {
    const history = History.create({ items });

    expect(history.toJSON()).toEqual({ items });
  });

  it("should fetch rates from server", (done) => {
    const request = jest.fn().mockResolvedValue(items);
    const history = History.create({ items: [] }, { request });

    history.fetchAll().then(() => {
      expect(history.toJSON()).toEqual({ items });
      done();
    });
  });

  it("should catch an error", (done) => {
    const request = jest.fn().mockRejectedValue(null);
    const history = History.create({ items: [] }, { request });

    history.fetchAll().then(() => {
      expect(history.toJSON()).toEqual({ items: [] });
      done();
    });
  });
});
