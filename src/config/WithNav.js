import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch
} from "react-router-dom";
import WithAuthRoute from "./WithAuthRoute";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../screens/home/Home";
import Recruit from "../screens/recruit/Recruit";
import Download from "../screens/download/Download";
import About from "../screens/about/About";
import Task from "../screens/task/Task";
import Applications from "../screens/applications/Applications";

const HeaderHOCComponent = withRouter(props => <Header {...props} />);
const RecruitHOCComponent = withRouter(props => <Recruit {...props} />);
const HomeHOCComponent = withRouter(props => <Home {...props} />);
const FooterHOCComponent = withRouter(props => <Footer {...props} />);

const WithNav = () => {
  console.log("withnav!!");
  return (
    <>
      <HeaderHOCComponent />
      <Switch>
        <Route path={"/"} exact component={HomeHOCComponent} />
        <Route path={"/download"} exact component={Download} />
        <Route path={"/about"} exact component={About} />
        <Route exact path={"/recruit"} component={RecruitHOCComponent} />
        <Route path={"/recruit/:id"} component={Task} />
        <WithAuthRoute exact path={"/applications"} acceptClaims={"admin"}>
          <Applications />
        </WithAuthRoute>
      </Switch>
      <FooterHOCComponent />
    </>
  );
};

export default WithNav;
