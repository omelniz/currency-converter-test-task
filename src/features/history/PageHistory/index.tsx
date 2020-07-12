import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Redirect } from "react-router-dom";
import ROUTES from "./../../../utils/routes";
import { useStore } from "./../../../models/store";
import HistoryTable from "./../HistoryTable";
import styles from "./page-history.module.css";

const PageHistory: React.FC = () => {
  const { auth, history } = useStore();

  useEffect(() => {
    if (auth.isAuthorized) {
      history.fetchAll();
    }
  }, []);

  if (!auth.isAuthorized) {
    return <Redirect to={ROUTES.LOGIN} />;
  }

  return (
    <div className={styles.page} data-testid="page-history">
      <div className={styles.inner}>
        <HistoryTable items={history.all} />
      </div>
    </div>
  );
};

export default observer(PageHistory);
