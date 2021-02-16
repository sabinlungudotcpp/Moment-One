import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

function Navbar(){
    return(
        
        <div className= "navBar">

            <h1> Moment-One</h1>
            <NavLink exact activeClassName="navbar__link--active" className="navbar__link" to = "/">Home </NavLink>

            <NavLink exact activeClassName="navbar__link--active" className="navbar__link" to="/YourProfile">Your Profile</NavLink>
            <NavLink exact activeClassName="navbar__link--active" className="navbar__link" to="/YourMoments">Your Moments</NavLink>

            <NavLink exact activeClassName="navbar__link--active" className="navbar__link" to="/CommunityMoments">Community Moments</NavLink>

            <NavLink
                exact
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/CommunityMembers"
                >
                Community Members
            </NavLink>

            <NavLink
                exact
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/SelfAwareness"
                >
                Self Awareness
            </NavLink>

            <NavLink
                exact
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/Settings"
                >
                Settings
            </NavLink>

            <NavLink
                exact
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/"
                >
                Logout
            </NavLink>
        </div>
    )
}

export default Navbar;