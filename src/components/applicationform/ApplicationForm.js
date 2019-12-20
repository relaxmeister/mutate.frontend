import React, { Component } from 'react';
import { EmailValidator } from '../../services/validator/impl/EmailValidator'
import PropTypes from 'prop-types';

import FormItem from '../formitem/FormItem.js'

import styles from './style.module.css';

const emailValidator = new EmailValidator();

const obj = {
	name: "Jonas",
	lastname: "Hallstrom",
	phone: "123",
	email: "123@123.se",
    city: "Stockholm",
    job: "Frontender",
	reasoning: "Let me in pls"
}

class ApplicationForm extends Component {

    constructor() {
        super()
        this.textInput = React.createRef();
        this.state = {
            firstNameError: undefined,
            lastNameError: undefined,
            emailError: undefined,
            phoneError: undefined,
            cityError: undefined,
            resumeError: undefined,
            coverletterError: undefined,
            reasoningError: undefined,
        }

        this.validateName = this.validateName.bind(this);
        //this.onNameChange = this.onNameChange.bind(this);
        this.onLastnameChange = this.onLastnameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.onReasoningChange = this.onReasoningChange.bind(this);

        this.onResumeChange = this.onResumeChange.bind(this);
        this.onCoverLetterChange = this.onCoverLetterChange.bind(this);

        this.validateForm = this.validateForm.bind(this);
    }

    componentWillMount() {
        document.body.style.overflow = "hidden";
    }

    componentDidMount() {
        //this.refs.modalen.focus(); //denna var nödvändig för instant esc-btn-close
        // lite överflödig numera iom att vi fokuserar på firstinput
        this.textInput.current.focusTextInput();

    }

    componentWillUnmount() {
        document.body.style.overflow = "visible";
    }

    onEscapePress(e) {
        if (e.keyCode === 27) {
            this.props.onModalClose();
        }
    }

    onSubmit() {
        const newFormData = {   // Rimligt att nollställa alla värden vid submit //förutom job
            ...this.props.formData,
            name: "",
            lastname: "",
            email: "",
            phone: "",
            city: "",
            cv: "",
            pb: "",
            reasoning: "",
        }
        // POST

        // fetch("http://localhost:8080/recruit/ph", {
        //     method: "POST",
        //     body: JSON.stringify(this.props.formData),
        //     headers: {
        //         "Content-type": "application/json",
        //         //'Access-Control-Allow-Origin': '*', Ändringen i backend "@CrossOrigin(origins="*")" fundamental
        //     }
        // }).then(response => {
        //     if (response.status >= 200 && response.status < 300) {
                
        //         console.log(response);
        //         // window.location.reload();
        //         this.props.onFormChange(newFormData) // skickar vidare nollställningen
        //         console.log("CLEAR FORM")
        //         return response.json();
        //     } else {
        //         console.log("something went wrong" + JSON.stringify(obj));
        //     }
        // }).then(json => {
        //     console.log(json);
        //     return json;
        // })
        // .catch(err => err);
        console.log("----------")
        const formDataWoW = new FormData(); // viktig del i ett skicka denna typ av data
        formDataWoW.append('file1', this.props.formData.cv);
        formDataWoW.append('file2', this.props.formData.pb);
        formDataWoW.append('obj', JSON.stringify(this.props.formData));
        /*formDataWoW.append('lastname', this.props.formData.lastname);
        formDataWoW.append('email', this.props.formData.email);
        formDataWoW.append('phone', this.props.formData.phone);
        formDataWoW.append('city', this.props.formData.city);
        formDataWoW.append('reasoning', this.props.formData.reasoning);*/ // optional

        // formData.append('name', true);
        // formData.append('name', 74);
        // formData.append('name', 'John');

        //formData.getAll('name'); // ["true", "74", "John"]

        console.log("data: " + formDataWoW.getAll)
        console.log("formdatawow: " + formDataWoW);
        console.log("cv: " + this.props.formData.cv);

        fetch("http://localhost:8080/recruit/phnewer", {
            method: "POST",
            body: formDataWoW,
            headers: {
                'Access-Control-Allow-Origin': '*' //, Ändringen i backend "@CrossOrigin(origins="*")" fundamental
            }
        }).then(async response => {
            if (response.status >= 200 && response.status < 300) {
                
                // window.location.reload();
                this.props.onFormChange(newFormData) // skickar vidare nollställningen
                console.log("CLEAR FORM")
                return response.json();
            } else {
                console.log("something went wrong" + JSON.stringify(obj));
            }
        }).then(json => {
            console.log(json);
            return json;
        })
        .catch(err => err);
    }

    validateForm(event) {
        event.preventDefault();
        this.validateName();
        this.validateLastname();
        this.validateEmail();
        this.validatePhone();
        this.validateCity();
        this.validateResume();
        this.validateCoverLetter();
        if (this.validateName() && this.validateLastname() && this.validateEmail() && this.validatePhone()
            && this.validateCity() && this.validateResume() && this.validateCoverLetter()) { // den avbryter så fort en failar vilket är synd :(
                
            this.onSubmit();
            //return true;
        }

        //return false; // CALL SUBMIT
    }

    validateName() {
        let res = true;
        const newName = this.props.formData.name;

        let errorMsg = undefined;
        if (newName === "") {
            res = false;
            errorMsg = "Dont forget about me :(";
        }

        this.setState({
            firstNameError: errorMsg
        })

        return res;
    }

    validateLastname() {
        let res = true;
        const newLastname = this.props.formData.lastname;

        let errorMsg = undefined;
        if (newLastname === "") {
            res = false;
            errorMsg = "pls include a last name, surely you have one, Mr Bond ;)";
        }

        this.setState({
            lastNameError: errorMsg
        })

        return res;
    }

    validateEmail() {
        let res = true;
        const newEmail = this.props.formData.email;

        const regexCheck = emailValidator.validate(newEmail);

        console.log("regexCheck: " + regexCheck)

        let errorMsg = undefined;
        if (!regexCheck) {
            res = false;
            errorMsg = "Hey, your email is invalid, fix it plz";
        }

        this.setState({
            emailError: errorMsg
        })

        return res;
    }

    validatePhone() {
        let res = true;
        const newPhone = this.props.formData.phone;

        let errorMsg = undefined;
        if (newPhone === "") {
            res = false;
            errorMsg = "trying to call, dsnt work :(((";
        }

        this.setState({
            phoneError: errorMsg
        })

        return res;
    }

    validateCity() {
        let res = true;
        const newCity = this.props.formData.city;

        let errorMsg = undefined;
        if (newCity === "") { //If empty
            res = false;
            errorMsg = "Cant find it on the map :(";
        }

        this.setState({
            cityError: errorMsg
        })

        return res;
    }

    validateResume() {
        let res = true;
        const newResume = this.props.formData.cv;

        let errorMsg = undefined;
        if (newResume === "") { //If empty
            res = false;
            errorMsg = "Include me!";
        }

        this.setState({
            resumeError: errorMsg
        })

        return res;
    }

    validateCoverLetter() {
        let res = true;
        const newCoverLetter = this.props.formData.pb;

        let errorMsg = undefined;
        if (newCoverLetter === "") { //If empty
            res = false;
            errorMsg = "Include me as well!";
        }

        this.setState({
            coverletterError: errorMsg
        })

        return res;
    }

    onNameChange(event) {
        const newFormData = {                   // object that we want to update
            ...this.props.formData,             // keep all other key-value pairs
            name: event.target.value            // update the value of specific key
        }
        this.setState({ firstNameError: undefined })
        this.props.onFormChange(newFormData)
    }

    onLastnameChange(event) {
        const newFormData = {
            ...this.props.formData,
            lastname: event.target.value
        }
        this.setState({ lastNameError: undefined })
        this.props.onFormChange(newFormData)
    }

    onEmailChange(event) {
        const newFormData = {
            ...this.props.formData,
            email: event.target.value
        }
        // validator discord har en väldigt märklig implementation
        if (this.state.emailError !== undefined) { // => vi har ett uttalat error
            const regexCheck = emailValidator.validate(event.target.value);
            if (regexCheck) { // if true, användaren har skrivit korrekt/rättat feleet
                this.setState({ emailError: undefined }) // error fixat
            }
            //
        }

        this.props.onFormChange(newFormData)
    }

    onPhoneChange(event) {
        const newFormData = {
            ...this.props.formData,
            phone: event.target.value
        }
        this.setState({ phoneError: undefined })
        this.props.onFormChange(newFormData)
    }

    onCityChange(event) {
        const newFormData = {
            ...this.props.formData,
            city: event.target.value
        }
        this.setState({ cityError: undefined })
        this.props.onFormChange(newFormData)
    }

    onReasoningChange(event) {
        const newFormData = {
            ...this.props.formData,
            reasoning: event.target.value
        }
        this.setState({ reasoningError: undefined })
        this.props.onFormChange(newFormData)
    }

    onResumeChange(event) {
        console.log(event)
        const newFormData = {
            ...this.props.formData,
            cv: event //detta event är egentligen en string
        }
        this.setState({ resumeError: undefined })
        this.props.onFormChange(newFormData)
    }

    onCoverLetterChange(event) {
        console.log(event)
        const newFormData = {
            ...this.props.formData,
            pb: event //detta event är egentligen en string
        }
        this.setState({ coverletterError: undefined })
        this.props.onFormChange(newFormData)
    }

    // eventuellt även för klickan utanför mainboxen, om inte för att det är en bra utmaning

    render() {
        console.log(this.props.formData);
        return (
            <div className={styles.modalAnimationWrapper} onKeyDown={this.onEscapePress.bind(this)} tabIndex="0" ref="modalen">
                <div className={styles.modalAnimationShade}>
                </div>
                <div className={styles.modalAnimationContent}>
                    <div className={styles.formModalWrapper}>
                        <div className={styles.formModalContent}>
                            <div className={styles.animationWrapper}>
                                <div className={styles.formSection}>
                                    <h2 className={styles.formTitle}>
                                        Apply for this job
                                    </h2>
                                    <form /*id="form1"*/>
                                        <div className={styles.flexVertical}>
                                            <div className={styles.formRow}>
                                                <FormItem
                                                    text={this.props.formData.name}
                                                    onChange={this.onNameChange.bind(this)}
                                                    title={"first name"}
                                                    placeholder={"Pea-Tear"}
                                                    type={"input"}
                                                    inputType={"text"}
                                                    required={true}
                                                    error={this.state.firstNameError}
                                                    ref={this.textInput}
                                                    tabIndex="0"
                                                />
                                                <FormItem
                                                    text={this.props.formData.lastname}
                                                    title={"last name"}
                                                    onChange={this.onLastnameChange}
                                                    placeholder={"Griffin"}
                                                    type={"input"}
                                                    inputType={"text"}
                                                    required={true}
                                                    error={this.state.lastNameError}
                                                />
                                            </div>
                                            <div className={styles.formRow}>
                                                <FormItem
                                                    text={this.props.formData.email}
                                                    title={"E-post"}
                                                    onChange={this.onEmailChange}
                                                    placeholder={"abc123@abc.abc"}
                                                    type={"input"}
                                                    inputType={"email"}
                                                    required={true}
                                                    error={this.state.emailError}
                                                />
                                                <FormItem
                                                    text={this.props.formData.phone}
                                                    title={"Phone"}
                                                    onChange={this.onPhoneChange}
                                                    placeholder={"(123) 456-789"}
                                                    type={"input"}
                                                    inputType={"text"} //skulle kunna vara något annat
                                                    required={true}
                                                    error={this.state.phoneError}
                                                />
                                            </div>
                                            <div className={styles.formRowSingleItem}>
                                                <FormItem
                                                    text={this.props.formData.city}
                                                    style={{ marginLeft: 0, marginRight: 0 }}
                                                    title={"City"}
                                                    onChange={this.onCityChange}
                                                    placeholder={""}
                                                    type={"input"}
                                                    inputType={"text"}
                                                    required={true}
                                                    error={this.state.cityError}
                                                />
                                            </div>

                                            <div className={styles.formRow}>
                                                <FormItem
                                                    title={"Resume/cv"}
                                                    text={this.props.formData.cv}
                                                    onChange={this.onResumeChange}
                                                    placeholder={"abc123@abc.abc"}
                                                    type={"button"}
                                                    inputType={"file"}
                                                    topic={"Resume"}
                                                    required={true}
                                                    error={this.state.resumeError}
                                                />
                                                <FormItem
                                                    title={"Cover letter"}
                                                    text={this.props.formData.pb}
                                                    onChange={this.onCoverLetterChange}
                                                    placeholder={"(123) 456-789"}
                                                    type={"button"}
                                                    inputType={"file"}
                                                    topic={"Cover Letter"}
                                                    required={true}
                                                    error={this.state.coverletterError}
                                                />
                                            </div>
                                            <div className={styles.formRowSingleItem}>
                                                <FormItem
                                                    text={this.props.formData.reasoning}
                                                    style={{ marginLeft: 0, marginRight: 0 }}
                                                    title={"WHY DO YOU WANT TO WORK AT MUTATE?"}
                                                    onChange={this.onReasoningChange}
                                                    placeholder={""}
                                                    type={"area"}
                                                    inputType={"text"}
                                                    required={false}
                                                //error={this.state.userNameError}
                                                />
                                            </div>
                                            <div className={`${styles.formRowSingleItem} ${styles.flexJustifyCenter} ${styles.flexHorizontal}`}>
                                                <button
                                                    onClick={this.validateForm}
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
                        <div className={styles.buttonClose} onClick={this.props.onModalClose}></div>
                    </div>
                </div>
            </div>
        );
    }
}

ApplicationForm.propTypes = {
    formData: PropTypes.object.isRequired,
}

export default ApplicationForm;