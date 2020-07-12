import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Redirect } from "react-router-dom";
import ROUTES from "./../../../utils/routes";
import { useStore } from "./../../../models/store";
import CurrencyRates from "./../CurrencyRates";
import styles from "./page-rates.module.css";

const PageRates: React.FC = () => {
  const { auth, rates } = useStore();

  useEffect(() => {
    if (auth.isAuthorized) {
      rates.fetchAll();
    }
  }, []);

  if (!auth.isAuthorized) {
    return <Redirect to={ROUTES.LOGIN} />;
  }

  return (
    <div className={styles.page} data-testid="page-rates">
      <div className={styles.inner}>
        <CurrencyRates items={rates.getSorted} />
      </div>
    </div>
  );
};

export default observer(PageRates);
