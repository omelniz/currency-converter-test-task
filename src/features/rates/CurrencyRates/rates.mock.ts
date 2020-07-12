import Rates from "./../../../models/Rates";

export const items = [
  { asset: "EUR/USD", startDate: "2019-07-22", quote: "1.12", isActive: true },
  { asset: "USD/JPY", startDate: "2018-07-22", quote: "2.12" },
  { asset: "GBP/USD", startDate: "2019-07-22", quote: "1.12" },
  { asset: "AUD/USD", startDate: "2018-07-22", quote: "2.12" },
  { asset: "USD/CHF", startDate: "2019-07-22", quote: "1.12" },
  { asset: "USD/CAD", startDate: "2018-07-22", quote: "2.12" },
];

export default Rates.create({ items });
