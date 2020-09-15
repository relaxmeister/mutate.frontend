import React, { useState } from "react";
import PropTypes from "prop-types";
import { EmailValidator } from "../../services/validator/impl/EmailValidator";
import FormItem from "../formitem/FormItem";

import styles from "./style.module.css";

const emailValidator = new EmailValidator();

const SubscribeForm = props => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(undefined);

  const onSubmit = () => {
    console.log(email + " SUBCRIBED!");
    setEmail("");
  };

  const validateForm = event => {
    event.preventDefault();
    validateEmail();

    if (validateEmail()) {
      // den avbryter så fort en failar vilket är synd :(
      onSubmit();
      //return true;
    }

    //return false; // CALL SUBMIT
  };

  const onEmailChange = event => {
    /*const newFormData = {
      ...this.props.formData,
      email: event.target.value
    };*/
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

    setEmail(event.target.value);
  };

  const validateEmail = () => {
    let res = true;
    //const newEmail = email;

    const regexCheck = emailValidator.validate(email);

    console.log("regexCheck: " + regexCheck);

    let errorMsg = undefined;
    if (!regexCheck) {
      res = false;
      errorMsg = "Hey, your email is invalid, fix it plz";
    }

    setEmailError(errorMsg);

    return res;
  };

  return (
    <form className={styles.row}>
      <FormItem
        text={email}
        label={"E-mail"}
        title={undefined}
        onChange={onEmailChange}
        placeholder={"Enter email"}
        type={"input"}
        inputType={"text"}
        required={false}
        error={emailError}
      />
      <div className={styles.signButton} onClick={validateForm}>
        Subscribe
      </div>
    </form>
  );
};

SubscribeForm.propTypes = {};

export default SubscribeForm;
