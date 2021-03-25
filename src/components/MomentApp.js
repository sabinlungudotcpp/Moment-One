import React from "react";
import "../css/style.css";
import NavBar from './GenericComponents/NavBar';
import Home from './DashboardComponents/Dashboard';
import Settings from './settingsComponents/Settings';
import Wellbeing from './wellbeingComponents/Wellbeing'
import Perspectives from './Perspectives/Perspectives';
import Community from './communityComponents/Community'
import LiveChat from './chatComponents/LiveChat';
import Profile from './ProfileComponents/Profile';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

const momentApp = () => { // Live Chat component

  return (
    <div className = "App">
        <NavBar />
          <div className = "PageContent">
          <Switch>
            <Route path = "/app" exact component = {Home}/>
            <Route path = "/app/home" exact component = {Home}/>
            <Route path = "/app/wellbeing" component = {Wellbeing} />
            <Route path = "/app/perspectives" component = {Perspectives} />
            <Route path = "/app/community" component = {Community} />
            <Route path = "/app/liveChat" component = {LiveChat} />
            <Route path = "/app/Settings" component = {Settings} />
            <Route path = "/app/about" exact component = {Home} />
            <Route path = "/app/tools" exact component = {Home} />
            <Route path = "/app/help" exact component = {Home} />
            <Route path = "/app/profile" exact component = {Profile} />
        </Switch>
        </div>
      </div>
  )
}
export default momentApp; // Export home