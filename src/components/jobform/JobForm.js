import React, { useState, useEffect, useRef } from "react";
import { EmailValidator } from "../../services/validator/impl/EmailValidator";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addJob, modifyJob } from "../../store/actions";

import FormItem from "../formitem/FormItem.js";

import styles from "./style.module.css";

const emailValidator = new EmailValidator();

const JobForm = props => {
  const [roleError, setRoleError] = useState(undefined);
  const [fieldError, setFieldError] = useState(undefined);
  const [jobDesciptionError, setJobDesciptionError] = useState(undefined);
  const [doingError, setDoingError] = useState(undefined);
  const [shouldHaveError, setShouldHaveError] = useState(undefined);
  const [bonusError, setBonusError] = useState(undefined);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focusTextInput();
    document.body.style.overflow = "hidden";
  }, [inputRef]);

  const validateForm = event => {
    event.preventDefault();
    validateRole();
    validateField();
    // this.validateEmail();
    // this.validatePhone();
    // this.validateCity();
    // this.validateResume();
    // this.validateCoverLetter();
    if (validateRole() && validateField()) {
      onSubmit();
      //     //return true;
    }
    // //return false; // CALL SUBMIT
    console.log("submited!!");
  };

  const onSubmit = () => {
    console.log(props.action);
    const newFormData = {
      // Rimligt att nollställa alla värden vid submit //förutom job
      ...props.formData,
      role: "",
      field: "",
      jobDescription: [],
      doing: [],
      shouldHave: [],
      bonus: []
    };

    if (props.action === "modify") {
      props.modifyJob(props.formData, props.job.jobs, props.auth.user.jwt);
      props.onFormChange(newFormData); //resettar nu oavsett lyckad API
    } else if (props.action === "create") {
      props.addJob(props.formData, props.auth.user.jwt); // verkar funka bra
      props.onFormChange(newFormData); // resettar nu oavsett lyckad API
    } else {
      console.log("inget hände, no action");
    }
  };

  const validateRole = () => {
    let res = true;
    const newName = props.formData.role;
    console.log(newName);
    console.log(props.formData);
    console.log(props);

    let errorMsg = undefined;
    if (newName === "") {
      res = false;
      errorMsg = "Dont forget about me :(";
    }

    setRoleError(errorMsg);

    return res;
  };

  const validateField = () => {
    let res = true;
    const newName = props.formData.field;

    let errorMsg = undefined;
    if (newName === "") {
      res = false;
      errorMsg = "Dont forget about me :(";
    }

    setFieldError(errorMsg);

    return res;
  };

  const onRoleChange = event => {
    const newFormData = {
      ...props.formData,
      role: event.target.value
    };
    setRoleError(undefined);
    props.onFormChange(newFormData);
  };

  const onFieldChange = event => {
    const newFormData = {
      ...props.formData,
      field: event.target.value
    };
    setFieldError(undefined);
    props.onFormChange(newFormData);
  };

  const onDescriptionChange = event => {
    let capsText = event.target.value.split(/\r?\n/);
    console.log(capsText); // funkar utmärkt men i text fuckas enter upp och blir ett kommatecken? wtf?

    const newFormData = {
      ...props.formData,
      jobDescription: [event.target.value]
    };
    setJobDesciptionError(undefined);
    props.onFormChange(newFormData);
  };

  const onDoingChange = event => {
    const newFormData = {
      ...props.formData,
      doing: [event.target.value]
    };
    setDoingError(undefined);
    props.onFormChange(newFormData);
  };

  const onShouldHaveChange = event => {
    const newFormData = {
      ...props.formData,
      shouldHave: [event.target.value]
    };
    setShouldHaveError(undefined);
    props.onFormChange(newFormData);
  };

  const onBonusChange = event => {
    const newFormData = {
      ...props.formData,
      bonus: [event.target.value]
    };
    setBonusError(undefined);
    props.onFormChange(newFormData);
  };

  const onEscapePress = e => {
    if (e.keyCode === 27) {
      props.onModalClose();
    }
  };

  console.log(props.formData);
  console.log("true?", console.log(props.formData.id));

  return (
    <div
      className={styles.modalAnimationWrapper}
      onKeyDown={event => onEscapePress(event)}
    >
      <div className={styles.modalAnimationShade}></div>
      <div className={styles.modalAnimationContent}>
        <div className={styles.formModalWrapper}>
          <div className={styles.formModalContent}>
            <div className={styles.animationWrapper}>
              <div className={styles.formSection}>
                <h2 className={styles.formTitle}>Create a new job</h2>
                <form /*id="form1"*/>
                  <div className={styles.flexVertical}>
                    <div className={styles.formRow}>
                      <FormItem
                        text={props.formData.role}
                        onChange={onRoleChange}
                        title={"Role"}
                        placeholder={"Java Dev"}
                        type={"input"}
                        inputType={"text"}
                        required={true}
                        error={roleError}
                        ref={inputRef}
                        tabIndex="0"
                      />
                      <FormItem
                        text={props.formData.field}
                        onChange={onFieldChange}
                        title={"Field"}
                        placeholder={"Engi to the neer"}
                        type={"input"}
                        inputType={"text"}
                        required={true}
                        error={fieldError}
                      />
                    </div>
                    <div className={styles.formRowSingleItem}>
                      <FormItem
                        text={props.formData.jobDescription}
                        style={{ marginLeft: 0, marginRight: 0 }}
                        title={"Description"}
                        onChange={onDescriptionChange}
                        placeholder={""}
                        type={"area"}
                        inputType={"text"}
                        required={false}
                        //error={this.state.userNameError}
                      />
                    </div>
                    <div className={styles.formRowSingleItem}>
                      <FormItem
                        text={props.formData.doing}
                        style={{ marginLeft: 0, marginRight: 0 }}
                        title={"Doing"}
                        onChange={onDoingChange}
                        placeholder={""}
                        type={"area"}
                        inputType={"text"}
                        required={false}
                        //error={this.state.userNameError}
                      />
                    </div>
                    <div className={styles.formRowSingleItem}>
                      <FormItem
                        text={props.formData.shouldHave}
                        style={{ marginLeft: 0, marginRight: 0 }}
                        title={"Should have"}
                        onChange={onShouldHaveChange}
                        placeholder={""}
                        type={"area"}
                        inputType={"text"}
                        required={false}
                        //error={this.state.userNameError}
                      />
                    </div>
                    <div className={styles.formRowSingleItem}>
                      <FormItem
                        text={props.formData.bonus}
                        style={{ marginLeft: 0, marginRight: 0 }}
                        title={"Bonus"}
                        onChange={onBonusChange}
                        placeholder={""}
                        type={"area"}
                        inputType={"text"}
                        required={false}
                        //error={this.state.userNameError}
                      />
                    </div>
                    <div
                      className={`${styles.formRowSingleItem} ${styles.flexJustifyCenter} ${styles.flexHorizontal}`}
                    >
                      <button
                        onClick={validateForm}
                        className={styles.submitBtnWrapper}
                        //type="submit"
                        //form="form1"
                      >
                        <div className={styles.submitButton}>Submit</div>
                      </button>
                    </div>
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

const mapStateToProps = state => ({
  job: state.job,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  addJob,
  modifyJob
})(JobForm);

//export default JobForm;
