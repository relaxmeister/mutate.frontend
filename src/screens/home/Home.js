import React, { Component } from 'react';
import styles from './style.module.css'; // webpacks config gör att detta är sättet att köra på

//const styles = require("./style.css"); // gammalt och stöds inte av denna wp-config

class Home extends Component {

    constructor(props) {
        super(props);

        this.reply_click = this.reply_click.bind(this);
    }

    reply_click() {
        var clicker = document.getElementById('homie');
        clicker.style.backgroundColor = "red"; 
        console.log(clicker);
    }

    render() {
        return (
            <div className={styles.first}>
                Home
                <button className={styles.button1} id={"homie"} onClick={this.reply_click}>

                </button >
            </div>
        );
    }
}

export default Home;