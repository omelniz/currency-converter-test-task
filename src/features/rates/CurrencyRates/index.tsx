import React from "react";
import clsx from "clsx";
import { StarIcon } from "./../../../components/Icons";
import Table, { Thead, Tbody } from "./../../../components/Table";
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
  <div data-testid="currency-rates">
    <Table>
      <Thead>
        <tr>
          <th></th>
          <th>Валютная пара</th>
          <th>Котировка</th>
          <th>Дата получения</th>
        </tr>
      </Thead>
      <Tbody>
        {items.map((item) => (
          <tr key={item.asset}>
            <td>
              <StarIcon
                role="button"
                className={clsx(styles.star, { [styles.filledStar]: item.isActive })}
                onClick={() => onToggleFavorite(item)}
              />
            </td>
            <td>{item.asset}</td>
            <td>{item.quote}</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </Tbody>
    </Table>
  </div>
);

CurrencyRates.defaultProps = {
  items: [],
};

export default CurrencyRates;
