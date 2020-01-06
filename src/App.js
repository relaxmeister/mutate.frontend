import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxAPIFetchJobs, addToShoppingList } from '../src/store/actions/index';

import Header from './components/header/Header';
import Home from './screens/home/Home';
import Recruit from './screens/recruit/Recruit';
import Download from './screens/download/Download';
import About from './screens/about/About';
import Task from './screens/task/Task';

const HeaderHOCComponent = withRouter((props) => <Header {...props} />);
const RecruitHOCComponent = withRouter((props) => <Recruit {...props} />);

class App extends Component {

    componentDidMount() {
        console.log("APPMOUNTED!")
        this.props.addToShoppingList();
        this.props.reduxAPIFetchJobs();
        fetch("http://localhost:8080/", {
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

    render() {
        return (
            <div>
                <Router>
                    <HeaderHOCComponent />
                    <Route path={"/"} exact component={Home} />
                    <Route path={"/download"} exact component={Download} />
                    <Route path={"/about"} exact component={About} />
                    <Route exact path={"/recruit"} component={RecruitHOCComponent} />
                    <Route path={"/recruit/:id"} component={Task} />
                </Router>
            </div>
        );
    };
}


export default connect(null,
    {
        addToShoppingList,
        reduxAPIFetchJobs
    })(App);
