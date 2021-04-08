import React from "react";
import searchIcon from "../../imageAssets/Icons/General/search.png"
import { NavLink } from 'react-router-dom';

import bellIcon from "../../imageAssets/Icons/Header/BellIcon.png"
import chatIcon from "../../imageAssets/Icons/Header/ChatIcon.png"
import presentIcon from "../../imageAssets/Icons/Header/presentIcon.png"
import settingsIcon from "../../imageAssets/Icons/Header/settingsIcon.png"
/**
 * @fileoverview: Component which returns the header for pages to render
 * @author: Ryan Spowart
 * @param {props}:title - page title  |blueTitle - subitle that appears in blue text | grayTitle - subtitle that appears in gray text
 * @component App() - Returns JSX
 * @requires: npm install react-router-dom

 */
const Dashboard = (props) => {
  return (
    <>
    <div className = "headerTop">
      <form className="searchbar">
        <input type="text" id = "search" className = "searchHead" placeholder="Search..."></input>
        <img className = "seachIcon" src = {searchIcon} alt="search"/>
      </form>
      
      <ul className="navIcons">
        <li>
          {/* navigation links */}
        <NavLink className="header_link" activeClassName="header_link_active" to = "/app/about">
          <p>About</p>
        </NavLink>
        </li>
        <li>
        <NavLink className="header_link" activeClassName="header_link_active" to = "/app/tools">
        <p>Tools</p>
        </NavLink>
        </li>
      <li>
        <NavLink className="header_link" activeClassName="header_link_active" to = "/app/help">
          <p>Help</p>
        </NavLink>
      </li>
      </ul>

        <ul className ="notificationIcons">
          <li className="notIcon">
            <div className="bellIcon">
              <img src={bellIcon} alt="bell"/>
            </div>
          </li>
          <li className="notIcon">
            <div className="chatIcon">
              <img src={chatIcon} alt="chat"/>
            </div>
          </li>
          <li className="notIcon">
            <div className="goalIcon">
              <img src={presentIcon} alt="present"/>
            </div>
          </li>
          <li className="notIcon">
            <NavLink to ="/app/settings">
              <div className="settingIcon">
                <img src={settingsIcon} alt="settings"/>
              </div>
            </NavLink>
          </li>

        </ul>

        <NavLink className="profile_link" activeClassName="profile_link_active" to = "/app/profile">
        <div className="linkWrap">
          <div className="profileBackground">
            <p className="text">Hello, "name"!</p>
            </div>
          <div className ="profilePicture"> </div>
        </div>

      </NavLink>
    </div>


    {/* page title */}
    <div className = "headerBottom">
      <h2> {props.title} </h2>
      <div className ="subtitleWrapper">
        <p className="blueTitle"> {props.blueTitle}</p>
        <p className="grayTitle">{props.grayTitle}</p>
      </div>
    </div>
    </>
  )
}

export default Dashboard; // Export the header