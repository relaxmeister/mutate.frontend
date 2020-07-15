import React, { useEffect } from "react";

import styles from "./style.module.css";

import cat from "../../assets/imgs/catz.gif";
import logo from "../../assets/icons/mutate-logoBLACK.png";
/**
 *
 * The page to show up when user got lost
 */
const NotFound = props => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.textSection}>
        <h4 className={styles.suggestionHeader}>
          Oopsies - we can not find the page you are looking for!
        </h4>
        <div className={styles.suggestionText}>
          This could be due to a faulty link, or you being wrong. Here are some pages we suggest. 
        </div>
        <ul className={styles.linkSection}>
          <li>
            <a href={"https://twitter.com/mutate"} className={styles.links}>
              @Mutate
            </a>
          </li>
          <li>
            <a href={"https://twitter.com/aftonbladet"} className={styles.links}>
              @Aftonbladet
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.animationWrapper}>
        <img src={cat} alt="cat" className={styles.catPic} />
      </div>
      <div className={styles.logoWrap}>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
    </div>
  );
};

export default NotFound;
