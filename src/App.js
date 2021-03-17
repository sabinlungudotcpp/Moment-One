import React from "react";
import "./css/style.css";
import NavBar from './components/GenericComponents/NavBar';
import Home from './components/DashboardComponents/Dashboard';
import Settings from './components/Settings';
import Wellbeing from './components/Wellbeing'
import Perspectives from './components/Perspectives';
import Community from './components/Community'
import LiveChat from './components/LiveChat';
import YourJourney from './components/yourJourneyComponents/YourJourney';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

const App = () => { // Main App

  return (

    <Router>
      <div className = "App">
         <NavBar />
            <div className = "PageContent">
          <Switch>
            <Route path = "/" exact component = {Home}/>
            <Route path = "/home" exact component = {Home}/>
            <Route path = "/home/yourJourney" component = {YourJourney}/>
            <Route path = "/wellbeing" component = {Wellbeing}/>
            <Route path = "/perspectives" component = {Perspectives}/>
            <Route path = "/community" component = {Community}/>
            <Route path = "/liveChat" component = {LiveChat}/>
            <Route path = "/Settings" component = {Settings}/>
        </Switch>

        </div>
      </div>
    </Router>
  )
}

export default App;