import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import babyImg from '../../assets/icons/baby.png'
import engineerImg from '../../assets/icons/ai.png';
import worker from '../../assets/icons/worker.png';
import defaultImg from '../../assets/icons/policeman.png';
import arrow from '../../assets/icons/right-arrow.png';

import styles from './style.module.css';

const JobOpeningCard = ({ album }) => {
    const { id, role, field, description, requirements, plusPoints } = album // lite märkligt just med album.album

    const functionName = () => {
        if (field === 'Design') {
            return <img className={styles.fieldImg} src={babyImg} />
        }
        if (field === 'Engineer') {
            return <img className={styles.fieldImg} src={engineerImg} />
        }
        if (field === 'Working Class Hero') {
            return <img className={styles.fieldImg} src={worker} />
        }
        return <img className={styles.fieldImg} src={defaultImg} />
    }

    return (
        <div className={styles.jobCardWrapper}>
            <Link to={"/recruit/ph"}>
            <div className={styles.container} onClick={() => console.log("clicked!!")}>
                {functionName()}
                <h4 className={styles.role}>{role}</h4>
                <p className={styles.field}>{field}</p>
                <div className={styles.absoluteThis}>
                    <img className={styles.arrowImg} src={arrow} />
                </div>
            </div>
            </Link>
        </div>
    );
}


JobOpeningCard.propTypes = {
    // album: PropTypes.object.isRequired
}

export default JobOpeningCard;