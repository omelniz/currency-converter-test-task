import React from "react";
import { Form, Field } from "react-final-form";
import TextField from "./../../../components/TextField";
import Button from "./../../../components/Button";
import { ReactComponent as ArrowRight } from "./../../../components/Icons/arrow-right.svg";
import styles from "./login.module.css";

const FormLogin: React.FC = () => (
  <Form onSubmit={() => {}}>
    {({ handleSubmit }) => (
      <form aria-label="Login form" className={styles.form} onSubmit={handleSubmit}>
        <header className={styles.header}>
          <h1 className={styles.title}>Вход в личный кабинет</h1>
        </header>
        <div className={styles.inner}>
          <Field
            id="f-email"
            className={styles.row}
            name="email"
            type="email"
            label="Логин"
            placeholder="user@mail.ru"
            component={TextField}
          />
          <Field
            id="f-password"
            className={styles.row}
            name="password"
            type="password"
            label="Пароль"
            placeholder="*********"
            component={TextField}
          />
        </div>
        <footer className={styles.footer}>
          <Button type="submit" fullWidth>
            Вход <ArrowRight />
          </Button>
        </footer>
      </form>
    )}
  </Form>
);

export default FormLogin;
