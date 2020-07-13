import React, { Component } from "react";

import styles from "./style.module.css";

import logo from "../../assets/icons/mutate-logoBLACK.png";
import close from "../../assets/icons/close.png";

const navigationList = [
  { namn: "Download your copy of Mutate", link: "/download" },
  { namn: "Find out more about Mutate", link: "/about" },
  { namn: "Want to work at Mutate?", link: "/recruit" }
];

class HamburgerMenu extends Component {
  renderListItems() {
    return navigationList.map(e => (
      <li key={e.namn} className={styles.listItem}>
        <div
          className={styles.linkFeatures}
          onClick={() => this.props.pageClick(e.link)}
        >
          {e.namn}
        </div>
      </li>
    ));
  }

  render() {
    console.log(
      "bool",
      this.props.auth.user !== null && this.props.auth.user !== undefined
    );
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
              {this.props.auth.user !== null &&
              this.props.auth.user !== undefined ? (
                <div
                  className={`${styles.button} ${styles.signIn}`}
                  onClick={() => this.props.logOut()}
                >
                  LOG OUT
                </div>
              ) : (
                <div
                  className={`${styles.button} ${styles.signIn}`}
                  onClick={() => this.props.pageClick("/login")}
                >
                  SIGN IN
                </div>
              )}

              <div
                className={`${styles.button} ${styles.get_app}`}
                onClick={() => this.props.pageClick("/download")}
              >
                Download zeh stuff
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HamburgerMenu;
