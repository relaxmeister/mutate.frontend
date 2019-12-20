import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

import TagListItem from '../taglistitem/TagListItem';

import logo from '../../assets/icons/mutate-logo.png';
import menuToggle from '../../assets/icons/menu-button.png';

var move = document.getElementById('sidemenu');

class HamburgerMenu extends Component {
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
            <div id={"sidemenu"} className={styles.modalWrapper}>
                <div className={styles.modalContainer} >
                    <div className={styles.headerContainer}>
                        <img
                            src={logo}
                            className={styles.logo}
                            alt="logo"
                            onClick={() => {
                                console.log("clicked!!");
                                this.props.history.push("/");
                            }} />
                        <img
                            src={menuToggle}
                            className={styles.menuToggle}
                            alt="hamburgermenu"
                            onClick={this.props.menuToggle}
                        />
                    </div>
                    <div className={styles.bottomContainer}>

                    </div>
                </div>
            </div>
        );
    }
}


HamburgerMenu.propTypes = {
    album: PropTypes.object.isRequired
}

export default HamburgerMenu;