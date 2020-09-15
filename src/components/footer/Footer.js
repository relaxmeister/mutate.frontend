import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/index";
//import PropTypes from 'prop-types';

import logo from "../../assets/icons/mutate-logo.png";
import twitter from "../../assets/icons/twitter.png";
import instagram from "../../assets/icons/instagram-logo.png";
//import facebook from "../../assets/icons/facebook.png";
import youtube from "../../assets/icons/youtube.png";
import arrow from "../../assets/icons/right-arrow.png";
import usa from "../../assets/flags/usa-today.png";
import germany from "../../assets/flags/germany.png";
import italy from "../../assets/flags/italy.png";
import spain from "../../assets/flags/spain.png";

import styles from "./style.module.css";

const content = [];

const languages = [
  { flag: usa, language: "English" },
  { flag: germany, language: "Deutch" },
  { flag: italy, language: "Italiano" },
  { flag: italy, language: "Italiano" },
  { flag: italy, language: "Italiano" },
  { flag: italy, language: "Italiano" },
  { flag: italy, language: "Italiano" },
  { flag: italy, language: "Italiano" },
  { flag: italy, language: "Italiano" },
  { flag: italy, language: "Italiano" },
  { flag: spain, language: "Espanol" }
];

const product = ["Ladda ned", "Why Mutate", "Inspiration", "Status"];
const companies = ["Om", "Jobb", "Varumärkning", "Nyhetsrum"];
const resources = [
  "Support",
  "Säkerhet",
  "Blogg",
  "Feedback",
  "Utvecklare",
  "StreamKit",
  "Open Source"
];
const policies = [
  "Villkor",
  "Sekretess",
  "Riktlinjer",
  "Tillkännagivande",
  "Licenser"
];

const Footer = props => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [language, setLanguage] = useState(languages[0]);

  const node = useRef();

  const onLanguagePress = () => {
    if (showLanguages) {
      setShowLanguages(false);
    } else {
      setShowLanguages(true);
    }
    console.log("dropdown OPENED");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [showLanguages]);

  const renderAccountAccess = () => {
    if (props.auth.user === null || props.auth.user === undefined) {
      return (
        <div
          className={styles.accountButton}
          onClick={() => {
            props.history.push("/register");
          }}
        >
          Register
        </div>
      );
    } else {
      //inloggad
      return (
        <div
          className={styles.accountButton}
          onClick={() => {
            props.logoutUser();
            props.history.push("/login");
          }}
        >
          Sign out
        </div>
      );
    }
  };

  const renderProductRoutes = () => {
    return product.map((e, index) => {
      return <div key={index} className={styles.navLink}>{e}</div>;
    });
  };
  const renderCompanyRoutes = () => {
    return companies.map((e, index) => {
      return <div key={index} className={styles.navLink}>{e}</div>;
    });
  };
  const renderResourcesRoutes = () => {
    return resources.map((e, index) => {
      return <div key={index} className={styles.navLink}>{e}</div>;
    });
  };
  const renderPolicyRoutes = () => {
    return policies.map((e, index) => {
      return <div key={index} className={styles.navLink}>{e}</div>;
    });
  };

  const onEscapePress = e => {
    if (e.keyCode === 27) {
      setShowLanguages(false);
    }
  };

  const setLanguageAndClose = item => {
    setLanguage(item);
    setShowLanguages(false);
  };

  /**
   * Hela dropdownen kan bli egen komponent, då måste den dock tillåta upp-drop och ned-drop samt en array av olika typer.
   */
  const handleClick = e => {
    if (showLanguages) {
      if (node.current.contains(e.target)) {
        // inside click
        console.log("INSIDECLICK");
        return;
      }
    }
    // outside click
    setShowLanguages(false);
  };

  const maybeRenderLanguages = () => {
    if (showLanguages) {
      return (
        <div className={styles.dropDown} ref={node}>
          <div className={styles.dropDownContent}>
            {languages.map((e, index) => {
              return (
                <div className={styles.dropDownItem} key={index}>
                  <div
                    className={styles.dropDownClickable}
                    onClick={() => setLanguageAndClose(e)}
                  >
                    <div className={styles.itemContainer}>
                      <img className={styles.flag} src={e.flag} alt="flag" />
                      <div
                        className={`${styles.textExtraSmall} ${styles.dropdownLanguageName}`}
                      >
                        {e.language}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  };

  return (
    <div className={styles.footer}>
      <div className={`${styles.row} ${styles.space} ${styles.col}`}>
        <div className={styles.infoBox}>
          <div className={styles.infoTitle}>Your place to talk</div>
          <div className={styles.language}>
            <div className={styles.languageContainer}>
              {maybeRenderLanguages()}
              <div
                className={styles.selectorContainer}
                onClick={onLanguagePress}
                tabIndex="0"
                onKeyDown={onEscapePress}
              >
                <img
                  src={language.flag}
                  className={`${styles.flag}`}
                  alt="flag"
                />
                <div className={styles.textExtraSmall}>{language.language}</div>
                {/*<img className={styles.arrowIcon} src={arrow} />*/}
                <div className={styles.arrowIcon}>></div>
              </div>
            </div>
          </div>
          <div className={styles.social}>
            <a className={styles.socialLink} href="http://twitter.com/mutateab">
              <img
                src={twitter}
                className={styles.infoSocialImg}
                alt="twitterimg"
              />
            </a>
            <a className={styles.socialLink} href="http://twitter.com/mutateab">
              <img
                src={instagram}
                className={`${styles.infoSocialImg} ${styles.marginLeft}`}
                alt="instagramimg"
              />
            </a>
            <a className={styles.socialLink} href="http://twitter.com/mutateab">
              <img
                src={youtube}
                className={`${styles.infoSocialImg} ${styles.marginLeft}`}
                alt="youtubeimg"
              />
            </a>
          </div>
        </div>
        <div className={styles.navBox}>
          <div className={styles.routeSection}>
            <p className={styles.listHeader}>Product</p>
            {renderProductRoutes()}
          </div>
          <div className={styles.routeSection}>
            <p className={styles.listHeader}>Companies</p>
            {renderCompanyRoutes()}
          </div>
          <div className={styles.routeSection}>
            <p className={styles.listHeader}>Resources</p>
            {renderResourcesRoutes()}
          </div>
          <div className={styles.routeSection}>
            <p className={styles.listHeader}>Policies</p>
            {renderPolicyRoutes()}
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.separator}></div>
        <div className={styles.linkContainer}>
          <div
            onClick={() => {
              props.history.push("/");
            }}
          >
            <img className={styles.linkLogo} src={logo} alt="logo" />
          </div>
          {renderAccountAccess()}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  logoutUser
})(Footer);
