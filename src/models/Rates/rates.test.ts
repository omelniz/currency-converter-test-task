import Rates, { Rate } from "./index";

const rawRate = { asset: "asset", date: "date", quote: "quote" };
const items = [...Array(5)].map(() => ({ ...rawRate, isActive: false }));

describe("Rate", () => {
  it("should create correct model", () => {
    const rate = Rate.create(rawRate);

    expect(rate.toJSON()).toEqual({ ...rawRate, isActive: false });
  });

  it("should toggle active", () => {
    const rate = Rate.create(rawRate);
    expect(rate.isActive).toBeFalsy();

    rate.toggleFavorite();
    expect(rate.isActive).toBeTruthy();

    rate.toggleFavorite();
    expect(rate.isActive).toBeFalsy();
  });
});

describe("Rates", () => {
  it("should create corrent list of rates", () => {
    const rates = Rates.create({ items });

    expect(rates.toJSON()).toEqual({ items });
  });

  it("should return sorted by isActive rates", () => {
    const sortedByDefault = [
      { ...rawRate, isActive: false },
      { ...rawRate, isActive: true },
    ];

    const rates = Rates.create({
      items: sortedByDefault,
    });

    expect(rates.items).toEqual(sortedByDefault);
    expect(rates.getSorted).toEqual([
      { ...rawRate, isActive: true },
      { ...rawRate, isActive: false },
    ]);
  });

  it("should fetch rates from server", (done) => {
    const request = jest.fn().mockResolvedValue(items);
    const rates = Rates.create({ items: [] }, { request });

    rates.fetchAll().then(() => {
      expect(rates.toJSON()).toEqual({ items });
      done();
    });
  });

  it("should catch an error", (done) => {
    const request = jest.fn().mockRejectedValue(null);
    const rates = Rates.create({ items: [] }, { request });

    rates.fetchAll().then(() => {
      expect(rates.toJSON()).toEqual({ items: [] });
      done();
    });
  });
});
