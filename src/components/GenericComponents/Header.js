import React from "react";
import searchIcon from "../../imageAssets/Icons/General/search.png"
import { NavLink } from 'react-router-dom';
//header component for all the pages
const Dashboard = (props) => {
  return (
    <>
    <div className = "headerTop">
      <form className="searchbar">
        <input type="text" id = "search" className = "search" placeholder="Search..."></input>
        <img className = "seachIcon" src = {searchIcon} alt="search"/>
      </form>
      
      <ul className="navIcons">
        <li>
          {/* navigation links */}
        <NavLink className="header_link" activeClassName="header_link_active" to = "/about">
          <p>About</p>
        </NavLink>
        </li>
        <li>
        <NavLink className="header_link" activeClassName="header_link_active" to = "/tools">
        <p>Tools</p>
        </NavLink>
        </li>
      <li>
        <NavLink className="header_link" activeClassName="header_link_active" to = "/help">
          <p>Help</p>
        </NavLink>
      </li>
      </ul>

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