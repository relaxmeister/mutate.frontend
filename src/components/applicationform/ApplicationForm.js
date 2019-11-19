import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormItem from '../formitem/FormItem.js'

import styles from './style.module.css';

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
        }

        this.validateName = this.validateName.bind(this);
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

    validateForm() {
        if (this.validateName()) {
            /// Do subimt.....
        }
    }

    validateName() {
        let res = true;
        const newName = this.props.formData.name;

        let userNameErrror = undefined;
        if (newName === "ok") {
            res = false;
            userNameErrror = "NO BUENO";
        }

        this.setState({
            firstNameError: userNameErrror
        })

        return res;
    }

    onNameChange(event) {
        const formData = {                   // object that we want to update
            ...this.props.formData,    // keep all other key-value pairs
            name: event.target.value       // update the value of specific key
        }
        this.props.onFormChange(formData)
    }

    onLastnameChange(event) {
        this.setState({ version: event.target.value });
    }


    // iom att form ligger här får även form logiken ske här!

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
                                    <div className={styles.flexVertical}>
                                        <div className={styles.formRow}>
                                            <h1>{this.state.userNameError}</h1>
                                            <FormItem
                                                text={this.props.formData.name}
                                                onChange={this.onNameChange.bind(this)}
                                                title={"first name"}
                                                placeholder={"Pea-Tear"}
                                                type={"input"}
                                                required={true}
                                                ref={this.textInput}
                                                tabIndex="0"
                                            />
                                            <FormItem
                                                title={"last name"}
                                                onChange={this.onLastnameChange}
                                                placeholder={"Griffin"}
                                                type={"input"}
                                                required={true}
                                            />
                                        </div>
                                        <div className={styles.formRow}>
                                            <FormItem
                                                title={"E-post"}
                                                placeholder={"abc123@abc.abc"}
                                                type={"input"}
                                                required={true}
                                            />
                                            <FormItem
                                                title={"Phone"}
                                                placeholder={"(123) 456-789"}
                                                type={"input"}
                                                required={true}
                                            />
                                        </div>
                                        <div className={styles.formRowSingleItem}>
                                            <FormItem
                                                style={{ marginLeft: 0, marginRight: 0 }}
                                                title={"City"}
                                                placeholder={""}
                                                type={"input"}
                                                required={true}
                                            />
                                        </div>

                                        <div className={styles.formRow}>
                                            <FormItem
                                                title={"Resume/cv"}
                                                placeholder={"abc123@abc.abc"}
                                                type={"button"}
                                                topic={"Resume"}
                                                required={true}
                                            />
                                            <FormItem
                                                title={"Cover letter"}
                                                placeholder={"(123) 456-789"}
                                                type={"button"}
                                                topic={"Cover Letter"}
                                                required={true}
                                            />
                                        </div>
                                        <div className={styles.formRowSingleItem}>
                                            <FormItem
                                                style={{ marginLeft: 0, marginRight: 0 }}
                                                title={"WHY DO YOU WANT TO WORK AT MUTATE?"}
                                                placeholder={""}
                                                type={"area"}
                                                required={false}
                                            />
                                        </div>
                                        <div className={`${styles.formRowSingleItem} ${styles.flexJustifyCenter} ${styles.flexHorizontal}`}>
                                            <button
                                                onClick={this.validateName}
                                                className={styles.submitBtnWrapper}
                                            >
                                                <div className={styles.submitButton}>Submit</div>
                                            </button>
                                        </div>
                                    </div>
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