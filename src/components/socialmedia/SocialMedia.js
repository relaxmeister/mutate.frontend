import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.css';

const SocialMedia = (props) => {

    return (
        <div className={styles.first}>
            <img style={{ width: 20, height: 20, marginRight: 20 }}src={props.album.link}/>
        </div>
    );
}

SocialMedia.propTypes = {
    album: PropTypes.object.isRequired
}

export default SocialMedia;