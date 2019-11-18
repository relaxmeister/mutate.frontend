import React, { Component } from 'react';

import FormItem from '../formitem/FormItem.js'

import styles from './style.module.css';

class ApplicationForm extends Component {

    componentWillMount() {
        document.body.style.overflow = "hidden";
    }

    componentDidMount() {
        this.refs.modalen.focus();
    }

    componentWillUnmount() {
        document.body.style.overflow = "visible";
    }

    onEscapePress(e) {
        if (e.keyCode === 27) {
            this.props.onModalClose();
        }
    }

    // iom att form ligger här får även form logiken ske här!

    // eventuellt även för klickan utanför mainboxen, om inte för att det är en bra utmaning

    render() {
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
                                            <FormItem
                                                title={"first name"}
                                                placeholder={"Pea-Tear"}
                                                type={"input"}
                                                required={true}
                                            />
                                            <FormItem
                                                title={"last name"}
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
                                        <div className={styles.formRowSingleItem}>
                                            <FormItem
                                                style={{ marginLeft: 0, marginRight: 0 }}
                                                title={"WHY DO YOU WANT TO WORK AT MUTATE?"}
                                                placeholder={""}
                                                type={"area"}
                                                required={false}
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

export default ApplicationForm;