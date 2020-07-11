import React from "react";
import FormLogin from "./../FormLogin";
import styles from "./page.module.css";

interface IPageLogin {
  onLogin: ({ login: string, password: string }) => void;
}

const PageLogin: React.FC<IPageLogin> = ({ onLogin }) => (
  <div data-testid="page-login" className={styles.page}>
    <div className={styles.inner}>
      <FormLogin onSubmit={onLogin} />
    </div>
  </div>
);

export default PageLogin;
