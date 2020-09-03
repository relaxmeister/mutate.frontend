import React from "react";
//import PropTypes from 'prop-types';

import styles from "./style.module.css";

const PerkCard = ({ perk }) => {
  return (
    <div className={styles.perkWrapper}>
      <div className={styles.perkContainer}>
      <img className={styles.icon} src={perk.icon} alt="perkIcon" />
      <div className={styles.header}>{perk.header}</div>
      <div className={styles.text}>{perk.text}</div>
      </div>
    </div>
  );
};

export default PerkCard;
