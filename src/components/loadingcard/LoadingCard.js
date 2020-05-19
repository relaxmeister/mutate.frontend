import React from 'react';
import Loader from 'react-loader-spinner'
//import PropTypes from 'prop-types';

import styles from './style.module.css';

const LoadingCard = (props) => {

    return (
        <div className={styles.wrapper}>
            <Loader type="Oval" color="blue" height={40} width={40} />
            <p className={styles.loadingText}>Please hold, loading job data</p>
        </div>
    );
}

export default LoadingCard;