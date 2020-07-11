import React from "react";
import FormLogin from "./../FormLogin";
import styles from "./page.module.css";

const PageLogin: React.FC = () => (
  <div data-testid="page-login" className={styles.page}>
    <div className={styles.inner}>
      <FormLogin />
    </div>
  </div>
);

export default PageLogin;
