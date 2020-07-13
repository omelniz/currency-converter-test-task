import React from "react";
import { Form, Field } from "react-final-form";
import TextField from "./../../../components/TextField";
import Button from "./../../../components/Button";
import { ArrowRightInvertedIcon } from "./../../../components/Icons";
import { required, composeValidators, password, email } from "./../../../utils/validate";
import styles from "./form-login.module.css";

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
