import React from "react";
import { observer } from "mobx-react-lite";
import Header from "./components/Header";
import PageLogin from "./features/login/PageLogin";
import { useStore } from "./models/store";

function App() {
  const { auth } = useStore();
  const { logout, login, isAuthorized } = auth;

  return (
    <div>
      <Header onLogout={logout} isAuthorized={isAuthorized} />
      <PageLogin onLogin={login} />
    </div>
  );
}

export default observer(App);
