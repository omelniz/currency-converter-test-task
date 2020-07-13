import React from "react";
import { NavLink } from "react-router-dom";
import ROUTES from "./../../utils/routes";
import styles from "./header.module.css";

interface IHeaderProps {
  isAuthorized?: boolean;
  onLogout: () => void;
}

export const Header: React.FC<IHeaderProps> = ({ isAuthorized, onLogout }) => (
  <header data-testid="header" className={styles.header}>
    <h6 className={styles.logo}>
      <NavLink className={styles.logoLink} activeClassName={styles.isActive} to={ROUTES.HOME} exact>
        TEST SPA app
      </NavLink>
    </h6>
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
