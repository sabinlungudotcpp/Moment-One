import React from "react";
import "./css/style.css";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Settings from './components/Settings';
import SelfAwareness from './components/SelfAwareness';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

const App = () => { // Main App

  return (
    <Router>
      <div className = "App">

      <NavBar />
        <div className = "PageContent">

          <Switch>
            <Route path = "/" exact component = {Home}/>
            <Route path = "/Home" component = {Home}/>
            <Route path = "/SelfAwareness" component={SelfAwareness}/>
            <Route path = "/Settings" component={Settings}/>
        </Switch>

        </div>
      </div>
    </Router>
  )
}

export default App;