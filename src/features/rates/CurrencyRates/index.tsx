import React from "react";
import clsx from "clsx";
import FlipMove from "react-flip-move";
import { observer } from "mobx-react-lite";
import { StarIcon } from "components/Icons";
import Table, { Thead, Tbody } from "components/Table";
import styles from "./rates.module.css";

interface IRate {
  asset: string;
  startDate: string;
  quote: string;
  isActive?: boolean;
}

export interface ICurrencyRatesProps {
  items: Array<IRate>;
}

const CurrencyRates: React.FC<ICurrencyRatesProps> = ({ items }) => (
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
        <FlipMove typeName={null}>
          {items.map((item) => (
            <tr key={item.asset}>
              <td>
                <StarIcon
                  role="button"
                  className={clsx(styles.star, { [styles.filledStar]: item.isActive })}
                  onClick={() => item.toggleFavorite()}
                />
              </td>
              <td>{item.asset}</td>
              <td>{item.quote}</td>
              <td>{item.startDate}</td>
            </tr>
          ))}
        </FlipMove>
      </Tbody>
    </Table>
  </div>
);

CurrencyRates.defaultProps = {
  items: [],
};

export default observer(CurrencyRates);
