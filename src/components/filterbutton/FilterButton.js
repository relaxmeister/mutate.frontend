import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

class FilterButton extends Component {
    //const { namn, link } = album;

    componentWillMount() {
        //document.body.style.overflow = "hidden"; // tar bort scroll
        //move.style.marginLeft = "500px";
    }

    componentWillUnmount() {
        //document.body.style.overflow = "visible";
        //move.style.marginLeft = "200px";
    }


    render() {
        return (
            <button className={`${this.props.isBoxChecked !== this.props.text ? styles.filterOptionIdle : styles.filterOptionSelected} ${styles.filterOption}`}
                role={"radio"}
                aria-checked={this.props.isBoxChecked === this.props.text ? "true" : "false"}
                onClick={() => this.props.changeCheckBox(this.props.text)}
                tabIndex={this.props.isBoxChecked === this.props.text ? 0 : -1}
            >
                {this.props.text}
            </button>
        );
    }
}


FilterButton.propTypes = {

}

export default FilterButton;