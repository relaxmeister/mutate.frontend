import React from "react";
import { Link } from "react-router-dom";
//import PropTypes from 'prop-types';

import styles from "./style.module.css";

import pic from "../../assets/icons/ai.png"

const ErrorCard = props => {
  return (
    <div className={styles.errorCardWrapper}>
      <div className={`${styles.errorCard} ${styles.card}`}>
        <div className={`${styles.errorFlexWrapper}`}>
          <div>
            <h4 className={styles.textHeader}>Oj då!</h4>
            <div className={styles.textContent}>
              Vi kunde inte hitta jobbet du sökte, men det finns många andra på
              vår{" "}
              <Link className={styles.link} to={"/recruit"}>
                jobbsida
              </Link>
            </div>
          </div>
          <div><img src={pic} alt="ai" /></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorCard;
