import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
//<img src = {logo} className="profileImg"/>
const Navbar = () => {
    return(
        
        <div className= "navbar">

            <div className = "NavLogo"></div>
            

            <div className = "profile">
                <div className = "profileImg"></div>
                <p>@Username</p>
            </div>

          
            
            <NavLink 
                exact 
                activeClassName="navbar__link--active" 
                className="navbar__link" to = "/">
                Moments 
            </NavLink>

            <NavLink 
                exact 
                activeClassName="navbar__link--active" 
                className="navbar__link" to="/YourProfile">
                Wellbeing
            </NavLink>
            
            <NavLink 
                exact 
                activeClassName="navbar__link--active" 
                className="navbar__link" 
                to="/YourMoments">
                Perspectives
            </NavLink>

            <NavLink 
                exact 
                activeClassName="navbar__link--active" 
                className="navbar__link" 
                to="/CommunityMoments">
                Community
            </NavLink>

            <NavLink 
                exact 
                activeClassName="navbar__link--active" 
                className="navbar__link" 
                to="/CommunityMembers">
                Live Chat
            </NavLink>

            <NavLink
                exact
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/Settings"
                >
                Settings
            </NavLink>
            <div className="logout">
                <NavLink
                    exact
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/"
                    >
                    Log-out
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;