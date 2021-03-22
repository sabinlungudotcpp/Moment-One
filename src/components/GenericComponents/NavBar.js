import React from "react";
import { NavLink } from 'react-router-dom';
/**
 * @fileoverview: Component which returns the navigation bar to be rendered
 * @author: Ryan Spowart
 * @component App() - Returns JSX
 * @requires: npm install react-router-dom
 */

const Navbar = () => { // Navigation Bar Component

    return (

         <div className= "navbar">
             <div className ="navbar_header">
                <div className = "NavLogo">
             </div>

                 <h2 className = "navTitle">Moment One</h2>
            </div>

        {/* Navigation Links */}
            <ul className="navbar_items">
                <li>
                    <NavLink activeClassName="navbar_link_active" className="navbar_link" to = "/home">
                        <div className = "icon">
                            <div className ="homeIcon"></div>
                        </div>
                        
                        <span className="navbar_items-text">Dashboard</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink exact activeClassName="navbar_link_active" className="navbar_link" to = "/wellbeing">

                        <div className = "icon">
                            <div className ="wellbeingIcon"></div>
                        </div>

                        <span className="navbar_items-text">Wellbeing</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink exact activeClassName = "navbar_link_active" className="navbar_link" to = "/perspectives">
                        <div className = "icon">
                            <div className ="perspectivesIcon"></div>
                        </div>

                        <span className="navbar_items-text">Perspectives</span>
                    </NavLink>
                </li>
                

                <li>
                    <NavLink exact activeClassName="navbar_link_active" className="navbar_link" to="/community">
                        <div className = "icon">
                            <div className ="communityIcon"></div>
                        </div>
                        <span className="navbar_items-text">Community</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink exact activeClassName="navbar_link_active" className="navbar_link" to="livechat">
                        <div className = "icon">
                            <div className ="livechatIcon"></div>
                        </div>
                        <span className="navbar_items-text">Chat</span>   
                    </NavLink>
                </li>
            </ul>
            {/* copyright information */}
            <div className="navFooter">
                <p>MomentOne Dashboard</p>
                <p>© 2021 All Rights Reserved</p>
            </div>
            
        </div>
    )
}

export default Navbar; //Exports Navbar