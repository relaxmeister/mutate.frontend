import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";
import { reduxAPIFetchJobs } from "../src/store/actions/index";
import WithAuthRoute from "./config/WithAuthRoute";

import Header from "./components/header/Header";
import Home from "./screens/home/Home";
import Recruit from "./screens/recruit/Recruit";
import Download from "./screens/download/Download";
import About from "./screens/about/About";
import Task from "./screens/task/Task";
import Applications from "./screens/applications/Applications";
import Auth from "./screens/auth/Auth";
import NotFound from "./screens/notfound/NotFound";

const HeaderHOCComponent = withRouter(props => <Header {...props} />);
const RecruitHOCComponent = withRouter(props => <Recruit {...props} />);
const AuthHOCComponent = withRouter(props => <Auth {...props} />);
const HomeHOCComponent = withRouter(props => <Home {...props} />);

class App extends Component {
  componentDidMount() {
    console.log("APPMOUNTED!");
    this.props.reduxAPIFetchJobs();
  }

  render() {
    return (
      <div>
        <Router>
          <HeaderHOCComponent />
          <Switch>
            <Route path={"/"} exact component={HomeHOCComponent} />
            <Route path={"/download"} exact component={Download} />
            <Route path={"/about"} exact component={About} />
            <Route exact path={"/recruit"} component={RecruitHOCComponent} />
            <Route path={"/recruit/:id"} component={Task} />
            <Route
              path={["/login", "/register"]}
              exact
              component={AuthHOCComponent}
            />
            <WithAuthRoute exact path={"/applications"} acceptClaims={"admin"}>
              <Applications />
            </WithAuthRoute>

            <Route path="*" component={NotFound} /> {/** Alt att redirecta tbax till förstasidan */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(null, {
  reduxAPIFetchJobs
})(App);
