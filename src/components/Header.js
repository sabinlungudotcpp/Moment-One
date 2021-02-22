import React, { Component } from "react";

function Header() {
  return (
    <div className = "header">
    <h1>Welcome Back,</h1>
    <div className = "searchBell">
        <form className="searchbar">
          <input type="text" id = "search" className="search"></input>
        </form>
      <div className = "bellIcon"></div>
    </div> 
  </div>
  )
}

export default Settings;