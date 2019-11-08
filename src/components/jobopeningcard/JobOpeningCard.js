import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

const JobOpeningCard = ({ album }) => {
    const { id, role, field, description, requirements, plusPoints } = album // lite märkligt just med album.album

    return (
        <div className={styles.jobCardWrapper}>
            <div className={styles.container}>
                <img />
                <p className={styles.role}>{role}</p>
                <p className={styles.field}>{field}</p>
            </div>
        </div>
    );
}


JobOpeningCard.propTypes = {
    // album: PropTypes.object.isRequired
}

export default JobOpeningCard;