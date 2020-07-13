import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../store/actions/index";
import FormItem from "../formitem/FormItem";
import { EmailValidator } from "../../services/validator/impl/EmailValidator";

import styles from "./style.module.css";

const emailValidator = new EmailValidator();

const defaultUser = {
  email: "",
  password: ""
};

const LoginForm = props => {
  const [user, setUser] = useState(defaultUser);
  const [emailError, setEmailError] = useState(undefined);
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
      email: "",
      password: ""
    };

    //API CALL - LOG IN ACCOUNT
    props.loginUser(user.email, user.password);

    console.log("COMPLETED");
    setUser(newFormData);
  };

  const validateForm = event => {
    event.preventDefault();

    validateEmail();
    validatePassword();
    if (validateEmail() && validatePassword()) {
      onSubmit();
      //return true;
    }

    //return false; // CALL SUBMIT
  };

  const validateEmail = () => {
    let res = true;
    const newEmail = user.email;

    const regexCheck = emailValidator.validate(newEmail);

    //console.log("regexCheck: " + regexCheck);

    let errorMsg = undefined;
    if (!regexCheck) {
      res = false;
      errorMsg = "Hey, your email is invalid, fix it plz";
    }

    setEmailError(errorMsg);

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

  const onEmailChange = event => {
    const newFormData = {
      ...user,
      email: event.target.value
    };
    // validator discord har en väldigt märklig implementation
    if (emailError !== undefined) {
      // => vi har ett uttalat error
      const regexCheck = emailValidator.validate(event.target.value);
      if (regexCheck) {
        // if true, användaren har skrivit korrekt/rättat feleet
        setEmailError(undefined); // error fixat
      }
      //
    }

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
              text={user.email}
              title={"E-mail"}
              onChange={onEmailChange}
              placeholder={"abc123@abc.abc"}
              type={"input"}
              inputType={"email"}
              required={true}
              error={emailError}
              theme={"dark"}
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
