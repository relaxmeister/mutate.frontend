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
import Footer from "./components/footer/Footer";
import Home from "./screens/home/Home";
import Recruit from "./screens/recruit/Recruit";
import Download from "./screens/download/Download";
import About from "./screens/about/About";
import Task from "./screens/task/Task";
import Applications from "./screens/applications/Applications";
import Auth from "./screens/auth/Auth";
import NotFound from "./screens/notfound/NotFound";
import WithoutNav from "./config/WithoutNav";
import WithNav from "./config/WithNav";

const HeaderHOCComponent = withRouter(props => <Header {...props} />);
const RecruitHOCComponent = withRouter(props => <Recruit {...props} />);
const AuthHOCComponent = withRouter(props => <Auth {...props} />);
const HomeHOCComponent = withRouter(props => <Home {...props} />);
const FooterHOCComponent = withRouter(props => <Footer {...props} />);

class App extends Component {
  componentDidMount() {
    console.log("APPMOUNTED!");
    this.props.reduxAPIFetchJobs();
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path={"/"} exact component={WithNav} />
            <Route path={"/download"} exact component={WithNav} />
            <Route path={"/about"} exact component={WithNav} />
            <Route exact path={"/recruit"} component={WithNav} />
            <Route path={"/recruit/:id"} component={WithNav} />
            <Route
              path={["/login", "/register"]}
              exact
              component={AuthHOCComponent}
            />
            <Route exact path={"/applications"} component={WithNav} />



            <Route path="*" component={NotFound} />{/** Alt att redirecta tbax till förstasidan */}
          </Switch>
        </Router>
      </>
    );
  }
}

export default connect(null, {
  reduxAPIFetchJobs
})(App);
