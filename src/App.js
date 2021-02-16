
import React from "react";
import "./css/style.css";

import NavBar from './components/NavBar';
import CommunityMembers from './components/CommunityMembers';
import CommunityMoments from './components/CommunityMoments';
import Home from './components/Home';
import SelfAwareness from './components/SelfAwareness';
import Settings from './components/Settings';
import UserProfile from './components/UserProfile';
import YourMoments from './components/YourMoments';

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className = "App">
        
        <NavBar />
        
        <div className = "PageContent">
          <Switch>
            <Route path="/" exact component = {Home}/>
            <Route path="/CommunityMembers" component={CommunityMembers}/>
            <Route path="/CommunityMoments" component={CommunityMoments}/>
            <Route path="/Home" component={Home}/>
            <Route path="/SelfAwareness" component={SelfAwareness}/>
            <Route path="/YourProfile" component={UserProfile}/>
            <Route path="/YourMoments" component={YourMoments}/>
            <Route path="/Settings" component={Settings}/>
          </Switch>
          </div>
      </div>
    </Router>
  )
}

export default App;