import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch
} from "react-router-dom";
//import WithAuthRoute from "./config/WithAuthRoute";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../screens/home/Home";
import Recruit from "../screens/recruit/Recruit";
import Download from "../screens/download/Download";
import About from "../screens/about/About";
import Task from "../screens/task/Task";
import Applications from "../screens/applications/Applications";
import Auth from "../screens/auth/Auth";
import NotFound from "../screens/notfound/NotFound";

const HeaderHOCComponent = withRouter(props => <Header {...props} />);
const RecruitHOCComponent = withRouter(props => <Recruit {...props} />);
const AuthHOCComponent = withRouter(props => <Auth {...props} />);
const HomeHOCComponent = withRouter(props => <Home {...props} />);
const FooterHOCComponent = withRouter(props => <Footer {...props} />);


/**
 * Är denna verkligen nödvändig? kan väl bara köra AUTHHOCComponent direkt från app
 */
const WithNav = () => {
  console.log("withOUTnav!!");
  return (
    <>
      <Switch>
        <Route
          path={["/login", "/register"]}
          exact
          component={AuthHOCComponent}
        />
      </Switch>
    </>
  );
};

export default WithNav;
