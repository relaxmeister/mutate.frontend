import React, { Component } from 'react';
import styles from './style.module.css'; // webpacks config gör att detta är sättet att köra på

//const styles = require("./style.css"); // gammalt och stöds inte av denna wp-config

class Home extends Component {

    render() {
        return (
            <div className={styles.first}>
                Home
            </div>
        );
    }
}

export default Home;