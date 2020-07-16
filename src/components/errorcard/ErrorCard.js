import React from "react";
import { Link } from "react-router-dom";
//import PropTypes from 'prop-types';

import styles from "./style.module.css";

import pic from "../../assets/icons/ai.png";

const ErrorCard = ({ header, text, link, linkText, moreText }) => {
  return (
    <div className={styles.errorCardWrapper}>
      <div className={`${styles.errorCard} ${styles.card}`}>
        <div className={`${styles.errorFlexWrapper}`}>
          <div>
            <h4 className={styles.textHeader}>{header}</h4>
            <div className={styles.textContent}>
              {text}
              {" "}
              {link ? <Link className={styles.link} to={link}>
                {linkText}
              </Link>: null}
              {moreText}
            </div>
          </div>
          <div>
            <img src={pic} alt="ai" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorCard;
