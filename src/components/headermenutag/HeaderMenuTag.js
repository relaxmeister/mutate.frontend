import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

const HeaderMenuTag = ({ album }) => {
    const { namn, link } = album // lite märkligt just med album.album

    return (
        <div className={styles.first}>
            <Link className={styles.text} to={link}>
                <span>{namn}</span>
            </Link>
        </div>
    );
}


HeaderMenuTag.propTypes = {
    album: PropTypes.object.isRequired
}

export default HeaderMenuTag;