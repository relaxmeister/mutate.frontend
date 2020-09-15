import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../store/actions/index";
import FormItem from "../formitem/FormItem";
import { EmailValidator } from "../../services/validator/impl/EmailValidator";

import styles from "./style.module.css";

const emailValidator = new EmailValidator();

const defaultUser = {
  username: "",
  password: ""
};

const LoginForm = props => {
  const [user, setUser] = useState(defaultUser);
  const [usernameError, setUsernameError] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);

  console.log("login", props.auth.user);

  useEffect(() => {
    var move = document.getElementById("dropdownLogin");
    move.style.transition = "all .6s ease";
    move.style.transform = "translateY(0%)";
    move.style.opacity = 1;
    //move.style.scale = 1;
  }, []);

  const onSubmit = () => {
    const newFormData = {
      // Rimligt att nollställa alla värden vid submit
      ...user, //frågan är om man ens är kvar på sidan?? eller redirect?
      username: "",
      password: ""
    };

    //API CALL - LOG IN ACCOUNT
    props.loginUser(user);

    console.log("COMPLETED");
    setUser(newFormData);
  };

  const validateForm = event => {
    event.preventDefault();

    validateUsername();
    validatePassword();
    if (validateUsername() && validatePassword()) {
      onSubmit();
      //return true;
    }

    //return false; // CALL SUBMIT
  };

  const validateUsername = () => {
    let res = true;
    const newUsername = user.username;

    let errorMsg = undefined;
    if (newUsername === "") {
      res = false;
      errorMsg = "Dont forget about me :(";
    }

    setUsernameError(errorMsg);

    return res;
  };

  const validatePassword = () => {
    let res = true;
    const newName = user.password;

    let errorMsg = undefined;
    if (newName === "") {
      res = false;
      errorMsg = "Dont forget about me :(";
    }

    setPasswordError(errorMsg);

    return res;
  };

  const onUsernameChange = event => {
    const newFormData = {
      ...user,
      username: event.target.value
    };

    setUser(newFormData);
  };

  const onPasswordChange = event => {
    const newFormData = {
      ...user,
      password: event.target.value
    };

    setUser(newFormData);
  };

  useEffect(() => {
    console.log("LOG", props.auth.user);
    if (props.auth.user !== null && props.auth.user !== undefined) {
      props.history.push("/recruit");
    }
  }, [props.auth, props.history]);

  return (
    <form id={"dropdownLogin"} className={styles.loginForm}>
      <div className={styles.mainLoginContainer}>
        <div className={styles.headerPrimary}>Welcome back!</div>
        <div className={styles.headerSecondary}>Log in to your account</div>
        <div className={styles.formSection}>
          <div className={styles.marginBottom20}>
            <FormItem
              text={user.username}
              title={"Username"}
              onChange={onUsernameChange}
              placeholder={"coolguy99"}
              type={"input"}
              inputType={"text"}
              required={true}
              error={usernameError}
              theme={"dark"}
              label={"username"}
            />
          </div>
          <div className={styles.marginBottom20}>
            <FormItem
              text={user.password}
              title={"Password"}
              onChange={onPasswordChange}
              placeholder={"secret123"}
              type={"input"}
              inputType={"text"}
              required={true}
              error={passwordError}
              theme={"dark"}
              label={"password"}
            />
          </div>
          <button
            onClick={validateForm}
            className={styles.submitBtnWrapper}
            //type="Logga in"
            //form="form1"
          >
            <div className={styles.submitText}>Log in</div>
          </button>
          <div className={styles.buttomButtonContainer}>
            <span className={styles.needAccount}>Do you need an account?</span>
            <Link to="/register" className={styles.linkButton}>
              <span className={styles.linkText}>Register</span>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

// export default connect(mapStateToProps, {})(Recruit);

// const mapStateToProps = ({ auth }) => {
//   const { user, error, loading } = auth;
//   return {  user, error, loading };
// };

export default connect(mapStateToProps, {
  loginUser
})(LoginForm);
