/*
  На вход попадает 100 сделок. Отобразить в истории нужно 20 с разбиением на десятки.
  В каждой десятке должно быть:
  - не больше 2-х убыточных сделок;
  - сделки отсортированы по дате и времени закрытия в контексте всей истории(вверху ближайшая сделка к текущей даты и времени, и так далее)
  - хотя бы 1-2 сделки с прибыльностью больше 100 долларов
  - не более двух одинаковых активов
*/

const COUNT_PER_PAGE = 10;
const MAX_LOSS_DEAL = 2;
const MIN_PROFIT_DEAL = 1;
const MAX_SAME_ASSET = 2;

class Bucket {
  constructor() {
    this.items = [];
    this.counters = {
      loss: 0,
      profit100: 0,
      names: {},
      length: 0,
    };
  }

  isComplete() {
    return this.counters.length === COUNT_PER_PAGE;
  }

  add(item) {
    if (!item) {
      return false;
    }

    const isLoss = item.profit < 0;
    const isProfit100 = item.profit > 100;

    if (this.counters.length === COUNT_PER_PAGE) {
      return false;
    }

    if (this.counters.names[item.asset] === MAX_SAME_ASSET) {
      return false;
    }

    if (isLoss && this.counters.loss === MAX_LOSS_DEAL) {
      return false;
    }

    if (!isProfit100 && this.counters.profit100 < MIN_PROFIT_DEAL && this.counters.length === COUNT_PER_PAGE - 1) {
      return false;
    }

    if (isLoss) {
      this.counters.loss++;
    }

    if (isProfit100) {
      this.counters.profit100++;
    }

    if (this.counters.names[item.asset]) {
      this.counters.names[item.asset]++;
    } else {
      this.counters.names[item.asset] = 1;
    }

    this.counters.length++;
    this.items.push(item);

    return true;
  }
}

function smartSort(items) {
  const result = [];
  let bucket = new Bucket();

  for (let item of items) {
    if (bucket.isComplete()) {
      result.push(...bucket.items);
      bucket = new Bucket();
    }

    bucket.add(item);
  }

  return result;
}

export default smartSort;
