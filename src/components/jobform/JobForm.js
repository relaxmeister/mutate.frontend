import React, { useState, useEffect, useRef } from "react";
import { EmailValidator } from "../../services/validator/impl/EmailValidator";
import PropTypes from "prop-types";

import FormItem from "../formitem/FormItem.js";

import styles from "./style.module.css";

const emailValidator = new EmailValidator();

const obj = {
  name: "Jonas",
  lastname: "Hallstrom",
  phone: "123",
  email: "123@123.se",
  city: "Stockholm",
  job: "Frontender",
  reasoning: "Let me in pls"
};

const JobForm = props => {

  const inputRef = useRef(null);

  // constructor() {
  //     super()
  //     this.textInput = React.createRef();
  //     this.state = {
  //         firstNameError: undefined,
  //         lastNameError: undefined,
  //         emailError: undefined,
  //         phoneError: undefined,
  //         cityError: undefined,
  //         resumeError: undefined,
  //         coverletterError: undefined,
  //         reasoningError: undefined,
  //     }

  // }

  // componentWillMount() {
  //     document.body.style.overflow = "hidden";
  // }

  // componentDidMount() {
  //     //this.refs.modalen.focus(); //denna var nödvändig för instant esc-btn-close
  //     // lite överflödig numera iom att vi fokuserar på firstinput
  //     this.textInput.current.focusTextInput();

  // }

  // componentWillUnmount() {
  //     document.body.style.overflow = "visible";
  // }

  const onEscapePress = e => {
    if (e.keyCode === 27) {
      props.onModalClose();
    }
  };

  useEffect(() => {
    inputRef.current.focusTextInput();
  }, [inputRef]);

  return (
    <div className={styles.modalAnimationWrapper} onKeyDown={(event) => onEscapePress(event)}>
      <div className={styles.modalAnimationShade}></div>
      <div className={styles.modalAnimationContent}>
        <div className={styles.formModalWrapper}>
          <div className={styles.formModalContent}>
            <div className={styles.animationWrapper}>
              <div className={styles.formSection}>
                <h2 className={styles.formTitle}>Apply for this job</h2>
                <form /*id="form1"*/>
                  <div className={styles.flexVertical}>
                    <FormItem
                      //text={this.props.formData.name}
                      //onChange={this.onNameChange.bind(this)}
                      title={"first name"}
                      placeholder={"Pea-Tear"}
                      type={"input"}
                      inputType={"text"}
                      required={true}
                      //error={this.state.firstNameError}
                      ref={inputRef}
                      tabIndex="0"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            className={styles.buttonClose}
            onClick={props.onModalClose}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
