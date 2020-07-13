import React, { Component } from "react";
//import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/index";

import styles from "./style.module.css";
import HeaderMenuTag from "../headermenutag/HeaderMenuTag";
import SocialMedia from "../socialmedia/SocialMedia";
import HamburgerMenu from "../hamburgermenu/HamburgerMenu";

import logo from "../../assets/icons/mutate-logo.png";
import menuToggle from "../../assets/icons/menu-button.png";

import twitterImg from "../../assets/icons/twitter.png";
import youtubeImg from "../../assets/icons/youtube.png";
import instagramImg from "../../assets/icons/instagram-logo.png";

const pages = [
  { namn: "Download", link: "/download" },
  { namn: "About", link: "/about" },
  { namn: "Job", link: "/recruit" }
];

const socialmedia = [
  { namn: "twitter", link: twitterImg, alt: "twitter" },
  { namn: "youtube", link: youtubeImg, alt: "youtube" },
  { namn: "instagram", link: instagramImg, alt: "instagram" }
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { hamburgermenu: false };

    this.menuClick = this.menuClick.bind(this);
    this.changePage = this.changePage.bind(this);
    console.log("header ", this.props.user);
    console.log("header location", this.props.history);
  }

  renderAccountAccess() {
    //BIND DENNA COMPONENT TILL REDUXUSER
    if (this.props.auth.user === null || this.props.auth.user === undefined) {
      return (
        <>
          <div className={styles.button}>
            <span className={styles.buttonText}>
              <Link to={"/login"} className={styles.a_link}>
                Sign in
              </Link>
            </span>
          </div>
          <div className={styles.button}>
            <span className={styles.buttonText}>
              <Link to={"/register"} className={styles.a_link_reg}>
                Get started
              </Link>
            </span>
          </div>
        </>
      );
    } else {
      //inloggad
      return (
        <div className={styles.button}>
          <span className={styles.buttonText}>
            <div
              onClick={() => {
                this.props.logoutUser();
                this.props.history.push("/login");
              }}
              className={styles.a_link}
            >
              Log out
            </div>
          </span>
        </div>
      );
    }
  }

  maybeRenderApplications() {
    if (this.props.auth.user !== null && this.props.auth.user !== undefined) {
      return this.props.auth.user.claims === "admin" ? (
        <HeaderMenuTag album={{ namn: "Appl", link: "/applications" }} />
      ) : null;
    }
  }

  renderSocialmedia() {
    return socialmedia.map(e => <SocialMedia key={e.namn} album={e} />);
  }

  renderPages() {
    return pages.map(e => <HeaderMenuTag key={e.namn} album={e} />);
  }

  menuClick() {
    //Maninupelar DOM direkt, funkar men inte optimalt, men vad är då alt?
    var move = document.getElementById("sidemenu");

    if (this.state.hamburgermenu === true) {
      console.log("close hamburger");
      //move.style.marginLeft = "500px";
      move.style.transform = "translateX(100%)";
      console.log(move);
      document.body.style.overflow = "visible";
      //setTimeout(this.setState({ hamburgermenu: false }), 3000);
      //setTimeout(function(){ alert("Hello"); }, 3000);
      this.setState({ hamburgermenu: false });
    } else {
      console.log("open hamburger");
      //move.style.marginLeft = "200px";
      //move.style.visibility = "visible";
      document.body.style.overflow = "hidden"; // tar bort scroll
      console.log(move.style);
      move.style.transition = "all .6s ease";
      move.style.transform = "translateX(0%)";
      this.setState({ hamburgermenu: true });
    }
  }

  changePage(event) {
    console.log("clicked: " + event);
    this.props.history.push(event);

    //Vi vet att den _var_ öppen
    var move = document.getElementById("sidemenu");
    console.log("close hamburger");
    move.style.transition = "none";
    move.style.transform = "translateX(100%)";
    //move.style.visibility = "hidden";

    console.log(move);
    document.body.style.overflow = "visible";
    this.setState({ hamburgermenu: false });
  }

  render() {
    if (
      this.props.history.location.pathname === "/login" ||
      this.props.history.location.pathname === "/register"
    ) {
      return null;
    } else {
      return (
        <div className={styles.absolut}>
          <div className={styles.first}>
            <div className={styles.second}>
              <div className={styles.third}>
                <img
                  src={logo}
                  className={styles.logo}
                  alt="logo"
                  onClick={() => {
                    console.log("clicked!!");
                    this.props.history.push("/");
                  }}
                />
                {this.renderPages()}
                {this.maybeRenderApplications()}
                {/*this.props.auth.user !== null &&
              this.props.auth.user.claims === "admin" ? (
                <HeaderMenuTag
                  album={{ namn: "Appl", link: "/applications" }}
                />
              ) : null*/}
              </div>
              <div className={styles.headerRightContent}>
                <div className={styles.socialmediaContainer}>
                  {this.renderAccountAccess()}
                </div>
                <img
                  src={menuToggle}
                  className={styles.menuToggle}
                  alt="hamburgermenu"
                  onClick={this.menuClick}
                />
              </div>
            </div>
          </div>
          {/*this.renderModal()*/}
          <HamburgerMenu
            menuToggle={this.menuClick}
            pageClick={this.changePage}
            logOut={() => {
              this.props.logoutUser();
              this.changePage("/login");
            }}
            auth={this.props.auth}
          />
        </div>
      );
    }
  }
}

Header.propTypes = {
  // propname: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

// export default connect(mapStateToProps, {})(Recruit);

// const mapStateToProps = ({ auth }) => {
//   const { user, error, loading } = auth;
//   return {  user, error, loading };
// };

export default connect(mapStateToProps, {
  logoutUser
})(Header);
//export default Header;
