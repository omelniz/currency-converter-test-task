import React from "react";
import FormLogin from "./../FormLogin";
import styles from "./page.module.css";
import request from "./../../../utils/request";
import Auth from "./../../../models/auth";

const auth = Auth.create({}, { request });

const PageLogin: React.FC = () => (
  <div data-testid="page-login" className={styles.page}>
    <div className={styles.inner}>
      <FormLogin onSubmit={auth.login} />
    </div>
  </div>
);

export default PageLogin;
