import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../../components/registerform/RegisterForm";
import LoginForm from "../../components/loginform/LoginForm";

import styles from "./style.module.css";

import logo from "../../assets/icons/mutate-logo.png";

const Auth = props => {
  

  //move.style.transform = "translateX(100%)";

  

  useEffect(() => {
    var move = document.getElementById("dropdownLogo");
    move.style.transition = "all .6s ease";
    move.style.transform = "translateY(200px)"; // 180%
    move.style.opacity = 1;
    move.style.scale = 1;
  }, []);

  return (
    <div className={styles.container}>
      <Link id={"dropdownLogo"} className={styles.logoWrapper} to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      {props.history.location.pathname === "/login" ? (
        <LoginForm {...props} />
      ) : (
        <RegisterForm {...props} />
      )}
    </div>
  );
};

export default Auth;
