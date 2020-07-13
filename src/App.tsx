import React from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import PageLogin from "./features/login/PageLogin";
import PageRates from "./features/rates/PageRates";
import PageHistory from "./features/history/PageHistory";
import PageConverter from './features/converter/PageConverter'
import { useStore } from "./models/store";
import ROUTES from "./utils/routes";

function App() {
  const { auth } = useStore();
  const { logout, isAuthorized } = auth;

  return (
    <BrowserRouter>
      <Header onLogout={logout} isAuthorized={isAuthorized} />
      <Switch>
        <Route path={ROUTES.HOME} component={PageRates} exact />
        <Route path={ROUTES.LOGIN} component={PageLogin} />
        <Route path={ROUTES.HISTORY} component={PageHistory} />
        <Route path={ROUTES.CONVERTER} component={PageConverter} />
      </Switch>
    </BrowserRouter>
  );
}

export default observer(App);
