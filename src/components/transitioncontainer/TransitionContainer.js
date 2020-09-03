import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./style.module.css";

/**
 * 
 * Not being used atm
 */
const TransitionContainer = props => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    /*var move = document.getElementById("dropdownRegister");
    move.style.transition = "all .6s ease";
    move.style.transform = "translateY(0%)";
    move.style.opacity = 1;*/
    //move.style.scale = 1;
    setVisible(true);
  }, []);

  return <div className={`${styles.container} ${visible ? styles.visible : null}`}></div>;
};

export default TransitionContainer;
