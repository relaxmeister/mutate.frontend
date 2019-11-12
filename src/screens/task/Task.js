import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './style.module.css'; // webpacks config gör att detta är sättet att köra på

import defaultImg from '../../assets/icons/policeman.png';
import arrow from '../../assets/icons/right-arrow.png';

const Text = {
    Header: "Senior Mexican Hombre",
    Stycke: [{
        Stycke: "Join our small-but-growing Analytics team to help us better understand our users and design the best possible experience for them." 
        + "In this central role, you will partner closely with product and business teams to define goals, provide insights, and build data tools.",
        Stycke2: "Your work will support decision-making at all levels of the company and enable us to create a best-in-class communications "
        + "platform that our millions of users and communities love.",
    }]

}

class Task extends Component {

    render() {
        return (
            <div className={styles.first}>
                <div className={styles.pageSelection}>
                    <div className={styles.pageSelectionWrapper}>
                        <div className={styles.widthDefault}>
                            <div className={styles.flexHorizontal}>
                                <div className={styles.flexChild}>
                                    <div className={styles.jobImgWrapper}>
                                        <img className={styles.fieldImg} src={defaultImg} />
                                    </div>
                                </div>
                                <div className={styles.jobTextFlex}>
                                    <h3>{Text.Header}</h3>
                                    <div>
                                        <div className={styles.stycke}>
                                        Discord is one of few places that combine who you play games with and how you play those games. We use this data to make Discord the best place to play games with your friends.
                                        </div>
                                        <div className={styles.stycke}>
                                        Lead our Data Platform team to build a scalable data platform that powers features and informs teams. Help us build scalable distributed systems like you'd construct additional pylons in your base. You build those in your sleep, amirite?
                                        </div>
                                    </div>
                                    <Link to={"/recruit"}>
                                        <div className={styles.backToRecruitButton}>
                                            <img className={styles.arrowImg} src={arrow} />
                                            Go back to jobs
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Task;