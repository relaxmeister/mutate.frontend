import React, { useState, useEffect } from "react";
import $ from "jquery";

import styles from "./style.module.css";

import ImageCarousel from "../../components/imagecarousel/ImageCarousel";
import PaneFeature from "../../components/panefeature/PaneFeature";

import logo from "../../assets/icons/baby.png";
import wash from "../../assets/icons/wash.png";
import family from "../../assets/icons/love.png";
import search from "../../assets/icons/search.png";
import play from "../../assets/icons/video.png";
import warning from "../../assets/icons/warning.png";
import phone from "../../assets/icons/whatsapp.png";

const Download = () => {
  const [platform, setPlatform] = useState("Platform");

  useEffect(() => {
    //Används på home och downloadsidan, kanske bör göras heltäckande?
    var OSName = "Unknown";
    if (window.navigator.userAgent.indexOf("Windows NT 10.0") !== -1)
      OSName = "Windows 10";
    if (window.navigator.userAgent.indexOf("Windows NT 6.2") !== -1)
      OSName = "Windows 8";
    if (window.navigator.userAgent.indexOf("Windows NT 6.1") !== -1)
      OSName = "Windows 7";
    if (window.navigator.userAgent.indexOf("Windows NT 6.0") !== -1)
      OSName = "Windows Vista";
    if (window.navigator.userAgent.indexOf("Windows NT 5.1") !== -1)
      OSName = "Windows XP";
    if (window.navigator.userAgent.indexOf("Windows NT 5.0") !== -1)
      OSName = "Windows 2000";
    if (window.navigator.userAgent.indexOf("Mac") !== -1) OSName = "Mac/iOS";
    if (window.navigator.userAgent.indexOf("X11") !== -1) OSName = "UNIX";
    if (window.navigator.userAgent.indexOf("Linux") !== -1) OSName = "Linux";

    setPlatform(OSName);
  }, []);

  const apiDownload = () => {
    fetch("//localhost:8080/download?platform=windoes", {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(async response => {
            if (response.status >= 200 && response.status < 300) {

                console.log("successjbobobjob!");
                //console.log(response.json());
                return response.json();
            } else {
                console.log("something went wrong with GETJOBS");
            }
        }).then(json => {
            console.log(json);
            return json;
        }).catch(err => err);
        //funkar
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.downloadContainer}>
        <div className={styles.downloadWrapper}>
          <div className={styles.downloadInfo}>
            <div className={styles.downloadTitle}>
              Hämta Mutate App för {platform}
            </div>
            <div className={styles.downloadSlogan}>
              Get straight into the action
            </div>
            <div className={styles.featureWrapper}>
              <div className={styles.featureContainer}>
                <img
                  src={logo}
                  className={styles.logo}
                  alt="logo"
                  onClick={() => {
                    console.log("clicked!!");
                    //this.props.history.push("/");
                  }}
                />
                <span className={styles.featureText}>
                  Your games in one place
                </span>
              </div>
              <div className={styles.featureContainer}>
                <img
                  src={logo}
                  className={styles.logo}
                  alt="logo"
                  onClick={() => {
                    console.log("clicked!!");
                    //this.props.history.push("/");
                  }}
                />
                <span className={styles.featureText}>
                  Your games in one place
                </span>
              </div>
              <div className={styles.featureContainer}>
                <img
                  src={logo}
                  className={styles.logo}
                  alt="logo"
                  onClick={() => {
                    console.log("clicked!!");
                    //this.props.history.push("/");
                  }}
                />
                <span className={styles.featureText}>Connect with friends</span>
              </div>
            </div>
            <a
              //href="//discordapp.com/api/download?platform=win"
              href={`//localhost:8080/download?platform=${platform}`}
              //href=""
              //download="//localhost:8080/download?platform=windoes"
              alt="download mutate"
              className={styles.downloadButton}
              //onClick={() => apiDownload()}
            >
              Ladda ned nu!
            </a>
            <div className={styles.todoPicture}>
              <div className={styles.pictureWrapper}>
                <ImageCarousel />
              </div>
            </div>
          </div>
          <div className={styles.downloadPictures}>
            <div className={styles.carousel}>
              <ImageCarousel />
            </div>
          </div>
        </div>
      </div>

      <section className={styles.featureGames}>
        <div className={styles.paneContent}>
          <div className={styles.paneHeader}>Your games in one place</div>
          <div className={styles.contentGroup}>
            <div
              className={`${styles.calloutPaneContent} ${styles.left}`}
            ></div>
            <div className={`${styles.calloutPaneContent} ${styles.right}`}>
              <div className={styles.paneFeatureGroup}>
                <PaneFeature
                  //icon color #04458F
                  feature={'games'}
                  image={family}
                  header={"Leave your family outside"}
                  text={
                    "Because you will want this all to yourself."
                  }
                  divider
                />
                <PaneFeature
                  //icon color #04458F
                  feature={'games'}
                  image={warning}
                  header={"Stay away"}
                  text={
                    "If you cant handle awesomeness then this is surely not something for you. Proved to be 110 percent awesome."
                  }
                  divider
                />
                <PaneFeature
                  feature={'games'}
                  image={search}
                  header={'Stalk your "friends"'}
                  text={
                    "They keep saying they're busy? Well, now they cant hide without you being all up in their business. Go get them!"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.featureSocial}>
        <div className={styles.paneContent}>
          <div className={styles.paneHeader}>More than just software</div>
          <div className={styles.contentGroup}>
            <div className={`${styles.calloutPaneContent} ${styles.left}`}>
              <PaneFeature
                //icon color #04458F
                feature={'social'}
                image={wash}
                header={"You smell"}
                text={
                  "We at Mutate would like to remind you of the fact that you will likely forget to shower. Perhaps its also time to care of the dishes?"
                }
                divider
              />
              <PaneFeature
                //icon color #04458F
                feature={'social'}
                image={family}
                header={"Live collaboration"}
                text={
                  "Bring your team together, wherever they are, and collaborate live - remote work redefined."
                }
                divider
              />
              <PaneFeature
                //icon color #04458F
                feature={'social'}
                image={family}
                header={"Creative tools"}
                text={
                  "Tools and workflow are organized around making things happen - what you see is what you get."
                }
                divider
              />
              <PaneFeature
                image={family}
                feature={'social'}
                header={"Instant feedback"}
                text={
                  "Whatever you do there is no waiting - everything is done in real time."
                }
              />
            </div>
            <div className={`${styles.calloutPaneContent} ${styles.right}`}>
              <div className={styles.paneFeatureGroup}></div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.featureShop}>
        <div className={styles.paneContent}>
          <div className={styles.paneHeader}>We also sell you garbage</div>
          <div className={styles.contentGroup}>
            <div
              className={`${styles.calloutPaneContent} ${styles.left}`}
            ></div>
            <div className={`${styles.calloutPaneContent} ${styles.right}`}>
              <div className={styles.paneFeatureGroup}>
                <PaneFeature
                  //icon color #04458F
                  feature={'shop'}
                  image={play}
                  header={"Play with your new toys"}
                  text={
                    "Cant get enough of toys you will use once!"
                  }
                  divider
                />
                <PaneFeature
                  feature={'shop'}
                  image={warning}
                  header={"You might go broke"}
                  text={
                    "Luckily, your wallet is safe with us."
                  }
                  divider
                />
                <PaneFeature
                  feature={'shop'}
                  image={phone}
                  header={"Call us whenever you want"}
                  text={
                    "However, dont expect us to pick up."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;
