import React, { useState, useEffect } from "react";
import { TextField } from "components/TextField";
import { Select } from "components/Select";
import Button from "components/Button";
import styles from "./form-converter.module.css";

const keys = Object.keys;
const head = (obj = {}) => keys(obj)[0];
const makeOptions = (obj = {}) => keys(obj).map((value) => ({ label: value, value }));

const FormConverter: React.FC = ({ rates }) => {
  const [result, setResult] = useState(null);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [amount, setAmount] = useState(1);

  useEffect(reinitialize, [rates]);

  function reinitialize() {
    const from = head(rates);

    setFrom(from);
    setTo(head(rates[from]));
  }

  function handleSubmit(event) {
    try {
      setResult(amount * rates[from][to]);
    } catch (err) {
      resetResult();
    } finally {
      event.preventDefault();
    }
  }

  function handleAmountChange(e) {
    setAmount(e.target.value);
    resetResult();
  }

  function handleFromChange(e) {
    const value = e.target.value;

    setFrom(value);
    setTo(head(rates[value]));
    resetResult();
  }

  function handleToChange(e) {
    setTo(e.target.value);
    resetResult();
  }

  function resetResult() {
    setResult(null);
  }

  return (
    <div>
      <form aria-label="Converter form" className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inner}>
          <div className={styles.fields}>
            <TextField
              id="f-amount"
              className={styles.field}
              name="amount"
              type="number"
              min="0"
              label="Сумма"
              onChange={handleAmountChange}
              value={amount}
            />
            <Select
              className={styles.field}
              name="from"
              aria-label="Select from"
              onChange={handleFromChange}
              options={makeOptions(rates)}
              value={from}
            />
            <Select
              className={styles.field}
              name="to"
              aria-label="Select to"
              onChange={handleToChange}
              options={makeOptions(rates[from])}
              value={to}
            />
          </div>
          <Button className={styles.submitBtn} type="submit">
            Рассчитать
          </Button>
        </div>
      </form>
      {result !== null && (
        <footer className={styles.footer}>
          <div aria-label="Result">
            <h6>Итого</h6>
            <p>{result}</p>
          </div>
        </footer>
      )}
    </div>
  );
};

FormConverter.defaultProps = {
  rates: {},
};

export default FormConverter;
