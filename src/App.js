import React from "react";
import "./css/style.css";

import NavBar from './components/NavBar';
import livechat from './components/LiveChat';
import community from './components/Community';
import home from './components/Home';
import perspectives from './components/Perspectives';
import settings from './components/Settings';
import wellbeing from './components/Wellbeing';
import yourmoments from './components/YourMoments';

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

const App = () => { // Main App Component
  return (
    <Router>
      <div className = "App">
        <NavBar />

        <div className = "PageContent">
          <Switch>
            <Route path = "/home" exact component = {home}/>
            <Route path = "/home/yourmoments" exact component = {yourmoments}/>
            <Route path = "/wellbeing" component = {wellbeing}/>
            <Route path = "/perspectives" component = {perspectives}/>
            <Route path = "/community" component = {community}/>
            <Route path = "/livechat" component = {livechat}/>
            <Route path = "/settings" component = {settings}/>
          </Switch>

          </div>
      </div>
    </Router>
  )
}

export default App;