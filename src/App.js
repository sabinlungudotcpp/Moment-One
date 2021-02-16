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
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className = "App">
      <header className = "App-header">
        <h1> Moment One Home</h1>
      </header>
    </div>
  )
}

export default App; // export the app