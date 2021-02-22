import React from "react";

const Home = () => { // Home Component
  return (
    <div className = "home">

      <div className = "header">
        <h1>Welcome Back,</h1>
        <div className = "searchBell">
            <form className="searchbar">
              <input type="text" id = "search" className="search"></input>
            </form>
          <div className = "bellIcon"></div>
        </div> 
      </div>

      <div className="content">
        <div className="journal">
          <h2> Your Moments Journal</h2>
          <div className="wrapper">

            <div className="line"></div>
          </div>
        </div>
      </div>

      <div className="handbook">
        handbook
      </div>

    </div>

  )
}

export default Home; // Export home