import React from "react";
import styles from "./header.module.css";

interface IHeaderProps {
  isAuthorized?: boolean;
  onLogout: () => void;
}

export const Header: React.FC<IHeaderProps> = ({ isAuthorized, onLogout }) => (
  <header data-testid="header" className={styles.header}>
    <h6 className={styles.logo}>TEST SPA app</h6>
    {isAuthorized && (
      <button className={styles.logoutBtn} type="button" onClick={onLogout}>
        Выход
      </button>
    )}
  </header>
);

Header.defaultProps = {
  isAuthorized: false,
};

export default Header;
