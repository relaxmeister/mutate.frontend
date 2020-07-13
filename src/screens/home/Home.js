import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./style.module.css";

import logo from "../../assets/icons/mutate-logo.png";

const Home = props => {


  return (
    <div className={styles.homeContainer}>
      <Link className={styles.button1} to="/recruit" onClick={() => console.log("MOVE ME")}>
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <Link className={styles.buttonfive} to={"/applications"}>START</Link>
    </div>
  );
};

export default Home;