import React from 'react';
//import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import babyImg from '../../assets/icons/baby.png'
import engineerImg from '../../assets/icons/ai.png';
import worker from '../../assets/icons/worker.png';
import defaultImg from '../../assets/icons/policeman.png';
import arrow from '../../assets/icons/right-arrow.png';

import styles from './style.module.css';

const JobOpeningCard = ({ album, history }) => {
    const { id, role, field } = album // lite märkligt just med album.album fixeed {}

    const functionName = () => {
        if (field === 'Design') {
            return <img className={styles.fieldImg} src={babyImg} alt="placeholder"/>
        }
        if (field === 'Engineer') {
            return <img className={styles.fieldImg} src={engineerImg} alt="placeholder"/>
        }
        if (field === 'Working Class Hero') {
            return <img className={styles.fieldImg} src={worker} alt="placeholder"/>
        }
        return <img className={styles.fieldImg} src={defaultImg} alt="placeholder"/>
    }

    return (
        <div className={styles.jobCardWrapper}>
            <div className={styles.container} onClick={() => {
                console.log("clicked!!");
                history.push("/recruit/" + id);
            }}>
                {functionName()}
                <h4 className={styles.role}>{role}</h4>
                <p className={styles.field}>{field}</p>
                <div className={styles.absoluteThis}>
                    <img className={styles.arrowImg} src={arrow}  alt="placeholder" />
                </div>
            </div>
        </div>
    );
}


JobOpeningCard.propTypes = {
    // album: PropTypes.object.isRequired
}

export default withRouter(JobOpeningCard);