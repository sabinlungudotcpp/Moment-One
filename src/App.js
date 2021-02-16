
import React from "react";
import "./css/style.css";

import NavBar from './Componenets/NavBar';
import CommunityMembers from './Componenets/CommunityMembers';
import CommunityMoments from './Componenets/CommunityMoments';
import Home from './Componenets/Home';
import SelfAwareness from './Componenets/SelfAwareness';
import Settings from './Componenets/Settings';
import UserProfile from './Componenets/UserProfile';
import YourMoments from './Componenets/YourMoments';

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