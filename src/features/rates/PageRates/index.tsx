import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "models/store";
import CurrencyRates from "./../CurrencyRates";

const PageRates: React.FC = () => {
  const { rates } = useStore();

  useEffect(() => {
    rates.fetchAll();
  }, []);

  return (
    <div data-testid="page-rates">
      <CurrencyRates items={rates.getSorted} />
    </div>
  );
};

export default observer(PageRates);
