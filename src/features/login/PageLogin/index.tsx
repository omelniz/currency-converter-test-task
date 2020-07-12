import React from "react";
import { Redirect } from "react-router-dom";
import FormLogin from "./../FormLogin";
import styles from "./page.module.css";
import ROUTES from "./../../../utils/routes";
import { useStore } from "./../../../models/store";

const PageLogin: React.FC = () => {
  const { auth } = useStore();

  if (auth.isAuthorized) {
    return <Redirect to={ROUTES.HOME} />;
  }

  return (
    <div data-testid="page-login" className={styles.page}>
      <div className={styles.inner}>
        <FormLogin onSubmit={auth.login} />
      </div>
    </div>
  );
};

export default PageLogin;
