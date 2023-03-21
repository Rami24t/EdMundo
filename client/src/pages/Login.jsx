import React from "react";
import LoginForm from "../components/LoginForm.jsx";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <main className={`${styles.loginMain}`}>
      <LoginForm />
    </main>
  );
};

export default Login;
