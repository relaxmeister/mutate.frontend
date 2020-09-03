import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormItem from "../../components/formitem/FormItem.js";
import SubribeForm from "../../components/subscribeform/SubscribeForm";
import Footer from "../../components/footer/Footer";

import styles from "./style.module.css";

import TransitionContainer from "../../components/transitioncontainer/TransitionContainer";
import logo from "../../assets/icons/mutate-logo.png";
import download from "../../assets/icons/download.png";
import defaultImg from "../../assets/icons/policeman.png";
import crocodile from "../../assets/imgs/Crocodile.png";
import dragon from "../../assets/imgs/Dragon.png";
import cured from "../../assets/imgs/cured.png";

var bodyRect = document.body.getBoundingClientRect();

/**
 *
 * www.lovesvg.com
 */
const Home = props => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  //window.scrollTo(0, 0);

  //window.addEventListener("scroll", displayWindowSize);

  //window.addEventListener("resize", displayWindowSize);

  useEffect(() => {
    //window.addEventListener("mousemove", () => {});
    window.addEventListener("scroll", displayWindowSize);
    window.addEventListener("resize", displayWindowSize);

    // returned function will be called on component unmount
    return () => {
      //window.removeEventListener("mousemove", () => {});
      window.removeEventListener("scroll", displayWindowSize);
      window.removeEventListener("resize", displayWindowSize);
    };
  }, []);

  function displayWindowSize() {
    // Get width and height of the window excluding scrollbars

    var w = document.documentElement.clientWidth; // skulle eventuellt kunna tweaka för varje breakpoint ist för statisk +100

    var h = document.documentElement.clientHeight; //+ window.scrollY;

    var first =
      document.querySelector("#first").getBoundingClientRect().top +
      100 -
      document.documentElement.clientHeight;
    //var second = document.documentElement.clientHeight - document.querySelector('#second').getBoundingClientRect().top - 50;
    var second =
      document.querySelector("#second").getBoundingClientRect().top +
      100 -
      document.documentElement.clientHeight;
    var third =
      document.querySelector("#third").getBoundingClientRect().top +
      100 -
      document.documentElement.clientHeight;
    if (first < 0) {
      setShowFirst(true);
    }
    if (second < 0) {
      setShowSecond(true);
    }
    if (third < 0) {
      setShowThird(true);
    }
    //console.log(third);
  }

  return (
    <div className={styles.homeContainer}>
      <section className={styles.introContainer}>
        <div className={styles.heroContainer}>
          <div className={styles.introBody}>
            <div className={styles.introText}>
              <h1 className={styles.introHeader}>
                Create, engage and have fun
              </h1>
              <div className={`${styles.mediumText} ${styles.introSubtitle}`}>
                We are making the next generation creative platform where games
                are built and enjoyed by everyone. The platform in its core is
                focused on social collaboration, live feedback and community
                building.
              </div>
            </div>
            <div
              className={styles.buttonContainer}
              onClick={e => console.log(bodyRect)}
            >
              <a className={`${styles.buttonLarge} ${styles.buttonContainer}`}>
                <img
                  className={styles.downloadIcon}
                  src={download}
                  alt="download"
                />
                Ladda Ned för Windows
              </a>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer} aria-hidden={true}>
          <img
            src={
              "https://www.discord.com/assets/e92fcc9ab6e63c1a17e954af347a1f1d.svg"
            }
            className={`${styles.foregroundLeft} ${styles.image}`}
            alt={true}
          />
          <img
            src={
              "https://www.discord.com/assets/7b01f72a2054561145b6dd04add417c0.svg"
            }
            className={`${styles.foregroundRight} ${styles.image}`}
            alt=""
          />
          {/*<img src={cured} className={styles.image}/>*/}
        </div>
      </section>
      <div className={`${styles.infoWrapper} ${styles.whiteBackground}`}>
        <div
          className={`${styles.infoContainer} ${styles.load} ${styles.row} ${
            showFirst ? styles.visible : ""
          }`}
          id="first"
        >
          <img
            className={styles.featureImage}
            src={
              "https://discord.com/assets/c01c644bc9fa2a28678ae2f44969d248.svg"
            }
            alt="lol"
          />
          <div className={styles.description}>
            <h2 className={styles.featureHeader}>
              Från några få eller en hel intressegrupp
            </h2>
            <div className={`${styles.mediumText} ${styles.introSubtitle}`}>
              Få igång ett community oavsett storlek med modereringsverktyg och
              specialanpassad medlemsåtkomst. Ge medlemmar specialförmåner,
              skapa privata kanaler och annat.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.breakContainer}></div>
      <div className={`${styles.infoWrapper} ${styles.greyBackground}`}>
        <div
          className={`${styles.infoContainer} ${styles.load} ${styles.row} ${
            styles.imageRight
          } ${showSecond ? styles.visible : ""}`}
          id="second"
        >
          <img
            className={styles.featureImage}
            src={"https://mutate.se/assets/img/game.png"}
            alt="lol"
          />
          <div className={styles.description}>
            <h2 className={styles.featureHeader}>
              Från några få eller en hel intressegrupp
            </h2>
            <div className={`${styles.mediumText} ${styles.introSubtitle}`}>
              Få igång ett community oavsett storlek med modereringsverktyg och
              specialanpassad medlemsåtkomst. Ge medlemmar specialförmåner,
              skapa privata kanaler och annat.
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.breakContainer} ${styles.invertedBreak}`}
        onClick={() => console.log(bodyRect)}
      ></div>
      <div className={`${styles.infoWrapper} ${styles.whiteBackground}`}>
        <div
          className={`${styles.infoContainer} ${styles.load} ${styles.row} ${
            showThird ? styles.visible : ""
          }`}
          id="third"
        >
          <img
            className={styles.featureImage}
            src={"https://mutate.se/assets/img/launcher.png"}
            alt="lol"
          />
          <div className={styles.description}>
            <h2 className={styles.featureHeader}>Build your community</h2>
            <div className={`${styles.mediumText} ${styles.introSubtitle}`}>
              Make new games with friends and new friends through games. Share
              your work and build your community. We provide flexible ways of
              monetizing your work.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.breakContainer}></div>
      <div className={`${styles.infoWrapper} ${styles.greyBackground}`}>
        <div
          className={`${styles.infoContainer} ${styles.column} ${styles.imageBottom}`}
        >
          <div className={`${styles.description} ${styles.center}`}>
            <h2 className={styles.featureHeader}>
              Sign up for the latest news and early access
            </h2>
            <div
              className={`${styles.mediumText} ${styles.introSubtitle} ${styles.marginBottom}`}
            >
              Take part in our development, get the latest news and early
              access!
            </div>
            <div className={styles.formContainer}>
              <SubribeForm />
              {/** https://confirmsubscription.com/h/d/F6276017D02D4F93 finns mer o göra */}
              <p
                className={`${styles.tinyText} ${styles.notifyText} ${styles.marginBottom}`}
              >
                Your information will be used to send you newsletters and
                information related to early access of our products. We will
                only send you relevant information and we will never sell your
                information to any third parties. You can, of course,
                unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*<Link
        className={styles.button1}
        to="/recruit"
        onClick={() => console.log("MOVE ME")}
      >
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <Link className={styles.buttonfive} to={"/applications"}>
        START
      </Link>*/}
    </div>
  );
};

export default Home;
