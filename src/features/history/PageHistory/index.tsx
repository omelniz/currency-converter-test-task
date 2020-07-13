import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "models/store";
import HistoryTable from "./../HistoryTable";
import Pagination from "components/Pagination";
import usePagination from "hooks/pagination";
import styles from "./page-history.module.css";

const PageHistory: React.FC = () => {
  const { history } = useStore();
  const { page, total, onPageChange, items } = usePagination(history.all);

  useEffect(() => {
    history.fetchAll();
  }, []);

  return (
    <div data-testid="page-history">
      <div className={styles.inner}>
        <HistoryTable items={items} />
      </div>
      <footer className={styles.footer}>
        <Pagination page={page} total={total} onChange={onPageChange} />
      </footer>
    </div>
  );
};

export default observer(PageHistory);
