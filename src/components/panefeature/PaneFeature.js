import React from "react";
//import PropTypes from 'prop-types';

import styles from "./style.module.css";

const PaneFeature = ({ header, text, divider, image, feature }) => {
  console.log(feature)
  const setStyleByProps = () => {
    switch(feature) {
      case 'games':
        return styles.gamesFeature;
      case 'social':
        return styles.socialFeature;
      case 'shop':
        return styles.shopFeature;
      default:
        return '';
    } 
  }


  return (
    <div className={`${styles.featureWrapper} ${setStyleByProps()}`}>
      <div className={styles.iconSection}>
        {image ? (
          <i className={styles.featureIconContainer}>
            <img
              
              src={image}
              alt={"description"}
            />
          </i>
        ) : null}
      </div>
      <div className={styles.featureContent}>
        <div className={styles.contentHeader}>{header}</div>
        <div className={styles.contentText}>{text}</div>
        {divider ? <div className={styles.featureDivider}></div> : null}
      </div>
    </div>
  );
};

export default PaneFeature;
