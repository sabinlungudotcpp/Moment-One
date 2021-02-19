import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => { // Navigation Bar Component
    return (
         <div className= "navbar">
            <div className = "NavLogo"></div>
        
            <div className = "profile">
                <div className = "profileImg"></div>
                <p>@Username</p>
            </div>

        {/* Navigation Links */}
            <ul className="navbar_items">
                <li>
                    <NavLink exact activeClassName="navbar_link_active" className="navbar_link" to = "/home">
                        <div className = "icon"></div>
                        <span className="navbar_items-text">Moments</span>
                        
                    </NavLink>

                </li>
                <li>
                    <NavLink exact activeClassName="navbar_link_active" className="navbar_link" to="/wellbeing">
                        <div className = "icon"></div>
                        <span className="navbar_items-text">Wellbeing</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="navbar_link_active" className="navbar_link" to = "/perspectives">
                        <div className = "icon"></div>
                        <span className="navbar_items-text">Perspectives</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="navbar_link_active" className="navbar_link" to="/community">
                        <div className = "icon"></div>
                        <span className="navbar_items-text">Community</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="navbar_link_active" className="navbar_link" to="livechat">
                        <div className = "icon"></div>
                        <span className="navbar_items-text">Live-Chat</span>   
                    </NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="navbar_link_active" className="navbar_link" to="/settings">
                        <div className = "icon"></div>
                        <span className="navbar_items-text">Settings</span>  
                        
                    </NavLink>
                </li>
                <li className="logout">
                    <NavLink exact activeClassName="navbar_link_active" className="navbar_link" to="/logout">
                        <div className = "icon"></div>
                        <span className="navbar_items-text">Log-Out</span>

                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;