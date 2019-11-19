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
        if (false) {
            return (<div className={styles.error}>HOL' UP!</div>);
        }
    }

    onChange(event) {
        this.props.onChange(event);
    }


    InputOrTextArea() {
        if (this.props.type === 'area') {
            return (
                <textarea
                    className={styles.textAreaField}
                    placeholder={this.props.placeholder}
                />
            );
        } if (this.props.type === 'button') {
            return (
                <UploadButton
                    topic={this.props.topic}
                //state of some kind
                />
            );
        }
        return (
            <input className={styles.inputField}
                value={this.props.text}
                onChange={this.onChange.bind(this)}
                type={"text"}
                placeholder={this.props.placeholder}
                ref={this.textInput}
            />
        );
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