import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
//icon imports
import homeIcon from '../imageAssets/MenuBarIcons/home.png';
import chat from '../imageAssets/MenuBarIcons/chat.png';
import community from '../imageAssets/MenuBarIcons/community.png';
import perspectives from '../imageAssets/MenuBarIcons/perspectives.png';
import wellbeing from '../imageAssets/MenuBarIcons/wellbeing.png';
import logout from '../imageAssets/MenuBarIcons/logout.png';

const Navbar = () => { // Navigation Bar Component
    return (
         <div className= "navbar">
            <div className = "NavLogo"></div>
        
            <div className = "profile">
                <div className = "profileImg"></div>
                {/* Placeholder : will get current user in future */}
                <p>@Username</p>
            </div>

        {/* Navigation Links */}
            <ul className="navbar_items">
                <li className="moments">
                    <NavLink activeClassName="navbar_link_active" className="navbar_link" to = "/home">
                        <div className = "icon">
                            <img src= {homeIcon}></img>
                        </div>
                        <span className="navbar_items-text">Moments</span>
                    </NavLink>
                    {/*moments sub menu*/}
                    <NavLink exact activeClassName="navbar_link_active" className="navbar_link" to = "/home/yourmoments">
                        <span className="navbar_subitems-text">Your Moments</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="navbar_link_active" className="navbar_link" to="/wellbeing">
                        <div className = "icon">
                            <img src= {wellbeing}></img>
                        </div>
                        <span className="navbar_items-text">Wellbeing</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="navbar_link_active" className="navbar_link" to = "/perspectives">
                        <div className = "icon">
                            <img src= {perspectives}></img>
                        </div>
                        <span className="navbar_items-text">Perspectives</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="navbar_link_active" className="navbar_link" to="/community">
                        <div className = "icon">
                            <img src= {community}></img>
                        </div>
                        <span className="navbar_items-text">Community</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="navbar_link_active" className="navbar_link" to="livechat">
                        <div className = "icon">
                            <img src= {chat}></img>
                        </div>
                        <span className="navbar_items-text">Live-Chat</span>   
                    </NavLink>
                </li>
                <li className="logout">
                    <NavLink exact activeClassName="navbar_link_active" className="navbar_link" to="/logout">
                        <div className = "icon">
                            <img src= {logout}></img>
                        </div>
                        <span className="navbar_items-text">Log-Out</span>

                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar; //Exports Navbar