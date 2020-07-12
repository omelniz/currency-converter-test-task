import React from "react";
import { Form, Field } from "react-final-form";
import TextField from "./../../../components/TextField";
import Button from "./../../../components/Button";
import { ArrowRightInvertedIcon } from "./../../../components/Icons";
import styles from "./form-login.module.css";

export const ERRORS = {
  REQUIRED: "Обязательное поле",
  EMAIL: "Введите корректный емайл",
  PASSWORD: "Минимальное количество символов 7",
};

const EMAIL_REGEX = /^(?!^\.)([a-zA-Z0-9_\-\.\+]{0,63}[a-zA-Z0-9_\-\+])@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]{1,254}\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

const required = (value: string) => (value ? undefined : ERRORS.REQUIRED);
const email = (value: string) => (EMAIL_REGEX.test(value) ? undefined : ERRORS.EMAIL);
const password = (value: string) => {
  let error = undefined;

  if (value.length < 7) {
    error = ERRORS.PASSWORD;
  }

  return error;
};

const composeValidators = (...validators) => (value, allValues, meta) =>
  validators.reduce((error, validator) => error || validator(value, allValues, meta), undefined);

interface IFormLogin {
  onSubmit: (values: { login: string; password: string }) => void;
}

const FormLogin: React.FC<IFormLogin> = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit, submitError, submitting }) => (
      <form aria-label="Login form" className={styles.form} onSubmit={handleSubmit}>
        <header className={styles.header}>
          <h1 className={styles.title}>Вход в личный кабинет</h1>
        </header>
        <div className={styles.inner}>
          <Field
            id="f-email"
            className={styles.row}
            name="login"
            type="email"
            label="Логин"
            placeholder="user@mail.ru"
            component={TextField}
            validate={composeValidators(required, email)}
          />
          <Field
            id="f-password"
            className={styles.row}
            name="password"
            type="password"
            label="Пароль"
            placeholder="*********"
            component={TextField}
            validate={composeValidators(required, password)}
          />
        </div>
        <footer className={styles.footer}>
          <Button type="submit" disabled={submitting} fullWidth>
            Вход <ArrowRightInvertedIcon />
          </Button>
          {submitError && (
            <p role="alert" className={styles.submitError}>
              {submitError}
            </p>
          )}
        </footer>
      </form>
    )}
  </Form>
);

export default FormLogin;
