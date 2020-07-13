import React from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Header from "./components/Header";
import PageLogin from "./features/login/PageLogin";
import PageRates from "./features/rates/PageRates";
import PageHistory from "./features/history/PageHistory";
import PageConverter from "./features/converter/PageConverter";
import { useStore } from "./models/store";
import ROUTES from "./utils/routes";
import styles from "./app.module.css";

function Layout() {
  const { auth } = useStore();

  if (!auth.isAuthorized) {
    return <Redirect to={ROUTES.LOGIN} />;
  }

  return (
    <div className={styles.page}>
      <header>
        <nav className={styles.nav}>
          <NavLink className={styles.link} activeClassName={styles.isActive} to={ROUTES.HOME} exact>
            Курсы валют
          </NavLink>
          <NavLink className={styles.link} activeClassName={styles.isActive} to={ROUTES.CONVERTER}>
            Конвертор
          </NavLink>
          <NavLink className={styles.link} activeClassName={styles.isActive} to={ROUTES.HISTORY}>
            История
          </NavLink>
        </nav>
      </header>
      <div className={styles.inner}>
        <Switch>
          <Route path={ROUTES.HOME} component={PageRates} exact />
          <Route path={ROUTES.HISTORY} component={PageHistory} />
          <Route path={ROUTES.CONVERTER} component={PageConverter} />
        </Switch>
      </div>
    </div>
  );
}

function App() {
  const { auth } = useStore();
  const { logout, isAuthorized } = auth;

  return (
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
      <Header onLogout={logout} isAuthorized={isAuthorized} />
      <Switch>
        <Route path={ROUTES.LOGIN} component={PageLogin} />
        <Route path={ROUTES.HOME} component={Layout} />
      </Switch>
    </BrowserRouter>
  );
}

export default observer(App);
