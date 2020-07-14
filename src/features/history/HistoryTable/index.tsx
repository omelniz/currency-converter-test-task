import React from "react";
import Table, { Thead, Tbody } from "components/Table";
import styles from "./history.module.css";

interface IHistoryRecord {
  asset: string;
  startDate: string;
  startQuote: string;
  finishDate: string;
  finishQuote: string;
  profit: string;
}

export interface IHistoryTableProps {
  items: Array<IHistoryRecord>;
}

export function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const year = String(date.getFullYear()).slice(-2);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const dateN = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth()).padStart(2, "0");

  return `${hours}:${minutes} ${dateN}.${month}.${year}`;
}

const HistoryTable: React.FC<IHistoryTableProps> = ({ items }) => (
  <div className={styles.history} data-testid="history">
    <Table>
      <Thead>
        <tr>
          <th>Актив</th>
          <th>Начало</th>
          <th>Котировка</th>
          <th>Конец</th>
          <th>Котировка</th>
          <th>Прибыль</th>
        </tr>
      </Thead>
      <Tbody>
        {items.map((item, index) => (
          <tr key={`${item.asset}${index}`}>
            <td data-label="Актив">{item.asset}</td>
            <td data-label="Начало">{formatDate(item.startDate)}</td>
            <td data-label="Котировка">{item.startQuote}</td>
            <td data-label="Конец">{formatDate(item.finishDate)}</td>
            <td data-label="Котировка">{item.finishQuote}</td>
            <td data-label="Прибыль">{item.profit}</td>
          </tr>
        ))}
      </Tbody>
    </Table>
  </div>
);

HistoryTable.defaultProps = {
  items: [],
};

export default HistoryTable;
