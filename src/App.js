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
<<<<<<< HEAD
    <div className = "App">
      <header className = "App-header">
        <h1> Moment One Home</h1>
      </header>
    </div>
=======
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
>>>>>>> 7b7635b9562f2d5cdd2be0ca6ce3baf7271b5173
  )
}

export default App;