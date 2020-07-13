import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../store/actions/index";
import { EmailValidator } from "../../services/validator/impl/EmailValidator";
import FormItem from "../formitem/FormItem";

import styles from "./style.module.css";

const emailValidator = new EmailValidator();

const defaultUser = {
  email: "",
  username: "",
  password: ""
};

const RegisterForm = props => {
  const [user, setUser] = useState(defaultUser);
  const [emailError, setEmailError] = useState(undefined);
  const [usernameError, setUsernameError] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);

  useEffect(() => {
    var move = document.getElementById("dropdownRegister");
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
      username: "",
      password: ""
    };
    props.registerUser(user);

    console.log("COMPLETED");

    setUser(newFormData);
    //API CALL - CREATE ACCOUNT
  };

  const validateForm = event => {
    event.preventDefault();

    validateEmail();
    validateUsername();
    validatePassword();
    if (validateEmail() && validateUsername() && validatePassword()) {
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

  const validateUsername = () => {
    let res = true;
    const newName = user.username;

    let errorMsg = undefined;
    if (newName === "") {
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
    console.log("register", props.auth);
  }, [props.auth]);

  useEffect(() => {
    console.log("LOG", props.auth.user);
    if (props.auth.user !== null && props.auth.user !== undefined) {
      props.history.push("/");
    }
  }, [props.auth, props.history]);

  return (
    <form id={"dropdownRegister"} className={styles.loginForm}>
      <div className={styles.centeringWrapper}>
        <div className={styles.headerPrimary}>Create account</div>
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
              text={user.username}
              title={"Username"}
              onChange={onUsernameChange}
              placeholder={"coolguy99"}
              type={"input"}
              inputType={"text"}
              required={true}
              error={usernameError}
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
              //className={styles.marginBottom20}
            />
          </div>
          <button
            onClick={validateForm}
            className={styles.submitBtnWrapper}
            //type="Logga in"
            //form="form1"
          >
            <div className={styles.submitText}>Create</div>
          </button>

          <Link to="/login" className={styles.linkButton}>
            <span className={styles.linkText}>Already have an account?</span>
          </Link>
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
  registerUser
})(RegisterForm);
