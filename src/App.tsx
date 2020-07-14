import React, { lazy, Suspense } from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Loader from "./components/Loader";
import { useStore } from "./models/store";
import ROUTES from "./utils/routes";
import styles from "./app.module.css";

const PageLogin = lazy(() => import("./features/login/PageLogin"));
const PageRates = lazy(() => import("./features/rates/PageRates"));
const PageHistory = lazy(() => import("./features/history/PageHistory"));
const PageConverter = lazy(() => import("./features/converter/PageConverter"));

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
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={PageLogin} />
          <Route path={ROUTES.HOME} component={Layout} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default observer(App);
