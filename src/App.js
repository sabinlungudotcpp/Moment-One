import React from "react";
import "./css/style.css";

import NavBar from './components/NavBar';
import livechat from './components/LiveChat';
import community from './components/Community';
import home from './components/Home';
import perspectives from './components/Perspectives';
import settings from './components/Settings';
import wellbeing from './components/Wellbeing';
import yourjourney from './components/YourJourney';

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

const App = () => { // Main App Component
  return (
<<<<<<< HEAD

=======
>>>>>>> 35fb59267f5a47fc739995260de62cdd0f07c5d5
    <Router>
      <div className = "App">
        <NavBar />

        <div className = "PageContent">
          <Switch>
<<<<<<< HEAD
            <Route path="/" exact component = {Home}/>
            <Route path="/CommunityMembers" component = {CommunityMembers}/>
            <Route path="/CommunityMoments" component = {CommunityMoments}/>
            <Route path="/Home" component = {Home}/>
            <Route path="/SelfAwareness" component={SelfAwareness}/>
            <Route path="/YourProfile" component = {UserProfile}/>
            <Route path="/YourMoments" component={YourMoments}/>
            <Route path="/Settings" component={Settings}/>
=======
            <Route path = "/home" exact component = {home}/>
            <Route path = "/home/yourjourney" exact component = {yourjourney}/>
            <Route path = "/wellbeing" component = {wellbeing}/>
            <Route path = "/perspectives" component = {perspectives}/>
            <Route path = "/community" component = {community}/>
            <Route path = "/livechat" component = {livechat}/>
            <Route path = "/settings" component = {settings}/>
>>>>>>> 35fb59267f5a47fc739995260de62cdd0f07c5d5
          </Switch>

          </div>
      </div>
    </Router>
  )
}

export default App;