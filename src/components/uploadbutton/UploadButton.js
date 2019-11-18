import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.css';

class UploadButton extends Component {

    state = { value: '' }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.fileInput);
        if (this.fileInput.current.files.length > 0) {
            this.setState({ value: this.fileInput.current.files[0].name });
        }
        
        console.log(this.state.value) // skriver ett steg efter, probs asyncproblem
    }

    render() {
        return (
            <div className={styles.button}>
                <div className={styles.buttonContent}>
                    <span>{this.state.value === '' ? "Attach" : `${this.props.topic} Attached!`}</span>
                    <input
                        ref={this.fileInput}
                        className={styles.fileInput}
                        type={"file"}
                        onChange={this.handleSubmit}
                    />
                </div>
            </div>
        );
    }
}

UploadButton.propTypes = {

}

export default UploadButton;
