import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './style.module.css';
import HeaderMenuTag from '../headermenutag/HeaderMenuTag';
import SocialMedia from '../socialmedia/SocialMedia';

import logo from '../../assets/icons/mutate-logo.png';
import menuToggle from '../../assets/icons/menu-button.png';

import twitterImg from '../../assets/icons/twitter.png';
import youtubeImg from '../../assets/icons/youtube.png';
import instagramImg from '../../assets/icons/instagram-logo.png';


const pages = [
    { namn: "Download", link: "/download" },
    { namn: "About", link: "/about" },
    { namn: "Job", link: "/recruit" }
];

const socialmedia = [
    { namn: "twitter", link: twitterImg },
    { namn: "youtube", link: youtubeImg },
    { namn: "instagram", link: instagramImg },
]


const Header = (props) => {

    const renderSocialmedia = () => {
        return socialmedia.map(e =>
            <SocialMedia key={e.namn} album={e} />
        );
    }

    const renderPages = () => {
        return pages.map(e =>
            <HeaderMenuTag key={e.namn} album={e} />
        );
    }

    return (
        <div className={styles.absolut}>
            <div className={styles.first}>
                <div className={styles.second}>
                    <div className={styles.third}>
                        <Link to="/">
                            <img src={logo} className={styles.logo} />
                        </Link>
                        {renderPages()}
                    </div>
                    <div className={styles.headerRightContent}>
                        <div className={styles.socialmediaContainer}>
                            {renderSocialmedia()}
                        </div>
                        <img src={menuToggle} className={styles.menuToggle} />
                    </div>
                </div>
            </div>
        </div>
    );
}

Header.propTypes = {
    // propname: PropTypes.object.isRequired
}

export default Header;