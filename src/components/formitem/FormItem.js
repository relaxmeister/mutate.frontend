import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.css';
import UploadButton from '../uploadbutton/UploadButton';

class FormItem extends Component {

    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput.current.focus();
    }

    maybeRenderRequired() {
        if (this.props.required) {
            return (<span className={styles.isRequired}>*</span>);
        }
    }

    maybeRenderError() {
        if (this.props.error !== undefined) {
            return (<div className={styles.error}>{this.props.error !== null ? this.props.error : "default error"}</div>);
        }
    }

    onChange(event) {
        this.props.onChange(event);
    }


    InputOrTextArea() {
        if (this.props.type === 'area') {
            return (
                <textarea
                    value={this.props.text}
                    className={styles.textAreaField}
                    placeholder={this.props.placeholder}
                    onChange={this.onChange.bind(this)}
                    type={this.props.inputType}
                />
            );
        } if (this.props.type === 'button') {
            return (
                <UploadButton
                    value={this.props.text} // funkar delvis, men inte till att inputen kommer ihåg sin filinput
                    topic={this.props.topic}
                    onChange={this.props.onChange}
                    inputType={this.props.inputType}
                //state of some kind
                />
            );
        }
        return (
            <input className={`${styles.inputField} ${this.props.error === "" || this.props.error !== undefined ? styles.inputFieldError : undefined}`}
            /* ${((this.props.error === "" || this.props.error !== undefined) ? styles.inputFieldError : null)}`}*/
            /* className={`${styles.formRowSingleItem} ${styles.flexJustifyCenter} ${styles.flexHorizontal}`} */
                value={this.props.text}
                onChange={this.onChange.bind(this)}
                type={this.props.inputType !== undefined ? this.props.inputType : "number"}
                required={this.props.required}
                placeholder={this.props.placeholder}
                ref={this.textInput}
            />
        );
    }

    render() {
        return (
            <div className={styles.formItem}>
                <h5 className={this.props.theme === undefined || this.props.theme !== 'dark' ? styles.formTitleLight : styles.formTitleDark}>
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
    inputType: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    onChange: function() {
        if (((this.props.type === 'input' || (this.props.type === 'area') && typeof(this.props.onChange) !== 'function'))) {
            return new Error('Please provide a onChange function!');
        }
    },
}

export default FormItem;