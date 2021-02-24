import React from "react";

const Header = (props) => {
  return (
    <div className = "header">
    <h1>{props.title}</h1>
      <div className = "searchBell">
          <form className="searchbar">
            
            <input type="text" id = "search" className="search"></input>
          </form>
        <div className = "bellIcon"></div>
      </div> 
    </div>
  )
}

export default Header;