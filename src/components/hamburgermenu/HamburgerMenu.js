import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./style.module.css";

import TagListItem from "../taglistitem/TagListItem";

import logo from "../../assets/icons/mutate-logoBLACK.png";
import close from "../../assets/icons/close.png";

var move = document.getElementById("sidemenu");

const navigationList = [
  { namn: "Download your copy of Mutate", link: "/download" },
  { namn: "Find out more about Mutate", link: "/about" },
  { namn: "Want to work at Mutate?", link: "/recruit" }
];

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

  renderListItems() {
    return navigationList.map(e => (
      <il key={e.namn} className={styles.listItem}>
        <Link
          className={styles.linkFeatures}
          onClick={() => this.props.pageClick(e.link)} /*to={e.link}*/
        >
          {e.namn}
        </Link>
      </il>
    ));
  }

  render() {
    return (
      <div id={"sidemenu"} className={styles.modalWrapper}>
        <div className={styles.modalContainer}>
          <div className={styles.headerContainer}>
            <img
              src={logo}
              className={styles.logo}
              alt="logo"
              onClick={() => {
                this.props.pageClick("/");
              }}
            />
            <img
              src={close}
              className={styles.menuToggle}
              alt="hamburgermenu"
              onClick={this.props.menuToggle}
            />
          </div>
          <div className={styles.navigationScroller}>
            <ul className={styles.navList}>{this.renderListItems()}</ul>
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.featureGrid}>
              <Link
                className={`${styles.button} ${styles.signIn}`}
                //onClick={() => this.props.pageClick("/download")}
                //TODO ny sida med signin zZz
              >
                SIGN IN
              </Link>
              <Link
                className={`${styles.button} ${styles.get_app}`}
                onClick={() => this.props.pageClick("/download")}
              >
                Download zeh stuff
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HamburgerMenu.propTypes = {
  album: PropTypes.object.isRequired
};

export default HamburgerMenu;
