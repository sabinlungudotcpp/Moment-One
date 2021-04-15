import React from "react";
import { NavLink } from 'react-router-dom';
/**
 * @fileoverview: NavBar component which returns the navigation bar to be rendered, along with a form for adding an excercise(non functional at the moment)
 * @author: Ryan Spowart
 * @component App() - Returns JSX
 * @requires: npm install react-router-dom | npm install react
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
                    <NavLink activeClassName="navbar_link_active" className="navbar_link" to = "/app/home">
                        <div className = "icon">
                            <div className ="homeIcon"></div>
                        </div>
                        
                        <span className="navbar_items-text">Dashboard</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink exact activeClassName="navbar_link_active" className="navbar_link" to = "/app/wellbeing">

                        <div className = "icon">
                            <div className ="wellbeingIcon"></div>
                        </div>

                        <span className="navbar_items-text">Wellbeing</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink exact activeClassName = "navbar_link_active" className="navbar_link" to = "/app/perspectives">
                        <div className = "icon">
                            <div className ="perspectivesIcon"></div>
                        </div>

                        <span className="navbar_items-text">Perspectives</span>
                    </NavLink>
                </li>
                

                <li>
                    <NavLink exact activeClassName="navbar_link_active" className="navbar_link" to="/app/community">
                        <div className = "icon">
                            <div className ="communityIcon"></div>
                        </div>
                        <span className="navbar_items-text">Community</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink exact activeClassName="navbar_link_active" className="navbar_link" to="/app/livechat">
                        <div className = "icon">
                            <div className ="livechatIcon"></div>
                        </div>
                        <span className="navbar_items-text">Chat</span>   
                    </NavLink>
                </li>
            </ul>

            <div className="exercise">
                <p>Make sure you shedule your next learning activity!</p>
                <button className="exerciseButton">+ Add Exercise</button>
            </div>
            {/* copyright information */}
            <div className="navFooter">
                <p>MomentOne Dashboard</p>
                <p>© 2021 All Rights Reserved</p>
            </div>
            
        </div>
    )
}

export default Navbar; //Exports Navbar