import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "./../../../models/store";
import HistoryTable from "./../HistoryTable";

const PageHistory: React.FC = () => {
  const { history } = useStore();

  useEffect(() => {
    history.fetchAll();
  }, []);

  return (
    <div data-testid="page-history">
      <HistoryTable items={history.all} />
    </div>
  );
};

export default observer(PageHistory);
