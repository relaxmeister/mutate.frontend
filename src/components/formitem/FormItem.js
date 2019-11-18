import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.css';
import UploadButton from '../uploadbutton/UploadButton';

class FormItem extends Component {

    maybeRenderRequired() {
        if (this.props.required) {
            return (<span className={styles.isRequired}>*</span>);
        }
    }

    maybeRenderError() {
        if (false) {
            return (<div className={styles.error}>HOL' UP!</div>);
        }
    }

    InputOrTextArea() {
        if (this.props.type === 'area') {
           return (<textarea className={styles.textAreaField} placeholder={this.props.placeholder} />);
        } if (this.props.type === 'button') {
            return (<UploadButton topic={this.props.topic} />);
        }
        return (<input className={styles.inputField} type={"text"} placeholder={this.props.placeholder} />);
    }

    render() {
        return (
            <div className={styles.formItem}>
                <h5 className={styles.formTitle}>
                    {this.props.title}
                    {this.maybeRenderRequired()}
                </h5>
                <div className={styles.flexVertical}>
                    {this.InputOrTextArea()}
                    {this.maybeRenderError()}
                </div>
            </div>
        );
    }
}

FormItem.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['input', 'area', 'button']),
    required: PropTypes.bool.isRequired,
}

export default FormItem;