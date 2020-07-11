import React from "react";
import clsx from "clsx";
import { StarIcon } from "./../../../components/Icons";
import styles from "./rates.module.css";

interface IRate {
  asset: string;
  date: string;
  quote: string;
  isActive?: boolean;
}

export interface ICurrencyRatesProps {
  items: Array<IRate>;
  onToggleFavorite: (rate: IRate) => void;
}

const CurrencyRates: React.FC<ICurrencyRatesProps> = ({ items, onToggleFavorite }) => (
  <table className={styles.table}>
    <thead className={styles.thead}>
      <tr>
        <th></th>
        <th>Валютная пара</th>
        <th>Котировка</th>
        <th>Дата получения</th>
      </tr>
    </thead>
    <tbody className={styles.tbody}>
      {items.map((item) => (
        <tr key={item.asset}>
          <td>
            <StarIcon
              className={clsx(styles.star, { [styles.filledStar]: item.isActive })}
              role="button"
              onClick={() => onToggleFavorite(item)}
            />
          </td>
          <td>{item.asset}</td>
          <td>{item.quote}</td>
          <td>{item.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

CurrencyRates.defaultProps = {
  items: [],
};

export default CurrencyRates;
