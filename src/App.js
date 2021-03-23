import React from "react";
import "./css/style.css";
import NavBar from './components/GenericComponents/NavBar';
import Home from './components/DashboardComponents/Dashboard';
import Settings from './components/settingsComponents/Settings';
import Wellbeing from './components/wellbeingComponents/Wellbeing'
import Perspectives from './components/Perspectives/Perspectives';
import Community from './components/communityComponents/Community'
import LiveChat from './components/chatComponents/LiveChat';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

/**
 * @fileoverview: The main App component that returns JSX which renders routes that users are able to take within the web app, i.e navigation between links
 * @author: Sabin Constantin Lungu, Ryan Spowart
 * @param: N/A
 * @component App() - Returns JSX
 * @requires: npm install react-router-dom
 */

const App = () => { // Main App Component

  return (

    <Router>
      <div className = "App">
        <NavBar />

          <div className = "PageContent">
            
          <Switch>
            <Route path = "/" exact component = {Home}/>
            <Route path = "/home" exact component = {Home}/>
            {/*<Route path = "/home/yourJourney" component = {YourJourney}/>*/}
            <Route path = "/wellbeing" component = {Wellbeing} />
            <Route path = "/perspectives" component = {Perspectives} />
            <Route path = "/community" component = {Community} />
            <Route path = "/liveChat" component = {LiveChat} />
            <Route path = "/Settings" component = {Settings} />
            <Route path = "/about" exact component = {Home} />
            <Route path = "/tools" exact component = {Home} />
            <Route path = "/help" exact component = {Home} />
        </Switch>

        </div>
      </div>
    </Router>

  )
}

export default App;