import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './screens/home/Home';
import Recruit from './screens/recruit/Recruit';
import Download from './screens/download/Download';
import About from './screens/about/About';

// const HeaderHOCComponent = withRouter((props) => <Header {...props} />);

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/download" exact component={Download} />
                <Route path="/about" exact component={About} />
                <Route path="/recruit" component={Recruit} />
            </Router>
        </div>
    );
};

export default App;
