import React from "react";
import RegisterForm from "../../components/registerform/RegisterForm";
import LoginForm from "../../components/loginform/LoginForm";

import styles from "./style.module.css";

const Auth = ( props ) => {
  const maybeRenderRegister = () => {
    console.log(props.history.location.pathname)
    return <RegisterForm {...props} />;
  };

  const maybeRenderLogin = () => {
    return <LoginForm {...props} />;
  };

  return (
    <div className={styles.container}>
      {props.history.location.pathname === "/login" ? <LoginForm {...props} /> : <RegisterForm {...props} />}
    </div>
  );
};

export default Auth;
