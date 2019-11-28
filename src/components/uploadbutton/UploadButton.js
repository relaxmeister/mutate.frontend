import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.css';

class UploadButton extends Component {

    //state = { value: '' }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();

        // if (this.props.value === undefined) {
        //     this.fileInput.current.files[0].name = this.props.value;
        // }
    }

    handleSubmit(event) {
        event.preventDefault();
        // event som inparam kan vara överflödig
        /// den ger oss hela filepathen? det under ger oss enbart filen
        if (this.fileInput.current.files.length > 0) {
            //this.setState({ value: this.fileInput.current.files[0].name });
            this.props.onChange(this.fileInput.current.files[0]);
        }
        //console.log(this.fileInput.current.files[0].name) // skriver ett steg efter, probs asyncproblem
    }

    render() {
        return (
            <div className={styles.button}>
                <div className={styles.buttonContent}>
                    <span>{this.props.value === '' || this.props.value === undefined ? "Attach" : `${this.props.topic} Attached!`}</span>
                    <input
                        //value={this.props.value}
                        ref={this.fileInput}
                        className={styles.fileInput}
                        type={this.props.inputType}
                        onChange={this.handleSubmit}
                    />
                </div>
            </div>
        );
    }
}

UploadButton.propTypes = {
    inputType: PropTypes.string.isRequired,
}

export default UploadButton;
