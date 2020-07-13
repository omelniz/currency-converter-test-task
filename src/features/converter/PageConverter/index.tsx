import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Redirect } from "react-router-dom";
import FormConverter from "./../FormConverter";
import ROUTES from "./../../../utils/routes";
import { useStore } from "./../../../models/store";
import styles from "./page-converter.module.css";

const PageConverter: React.FC = () => {
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
    <div data-testid="page-converter" className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Конвертация валют</h1>
      </header>
      <div className={styles.inner}>
        <FormConverter rates={rates.getRatesTable} />
      </div>
    </div>
  );
};

export default observer(PageConverter);
