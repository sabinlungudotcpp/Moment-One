import React from "react";
import searchIcon from "../imageAssets/Icons/General/search.png"
const Header = (props) => {
  return (
    <div className = "header">
    <h1>{props.title}</h1>
      <div className = "searchBell">
        <form className="searchbar">
          <img className = "seachIcon" src={searchIcon} />
          <input type="text" id = "search" className="search"></input>
        </form>
        <div className = "bellIcon"></div>
      </div> 
    </div>
  )
}

export default Header;