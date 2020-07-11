import React from "react";
import styles from "./header.module.css";

const Header: React.FC = () => (
  <header data-testid="header" className={styles.header}>
    <h6 className={styles.logo}>TEST SPA app</h6>
  </header>
);

export default Header;
