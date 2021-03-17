import React from "react";
import searchIcon from "../../imageAssets/Icons/General/search.png"

const Dashboard = (props) => { // Header component
  return (
    <>
    <div className = "headerTop">
      
        

          <form className="searchbar">
            <input type="text" id = "search" className = "search"></input>
            <img className = "seachIcon" src = {searchIcon} />
          </form>

          <div className = "searchBell">
          <div className = "bellIcon"></div>
        </div> 
    </div>
    <div className = "headerBottom">
      <h1> {props.title} </h1>
      <div className ="subtitleWrapper">
        <p className="blueTitle"> {props.blueTitle}</p>
        <p className="grayTitle">{props.grayTitle}</p>
      </div>
    </div>
    </>
  )
}

export default Dashboard; // Export the header