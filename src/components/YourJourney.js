import React from "react";
import Header from "./Header";

function yourJourney() {
  return (
    <div className = "Page">
      {/*importing the header component*/}
      <Header title="Your Journey"/>
      <div className="Content">
        <div className = "journeyContentGrid">
          <div className="profileWrapper">
          <div className="profileImg"></div>
          <div className="profile">
            <h1>@username</h1>
            <p> About me section where the user can input a bio about themself </p>
          </div>
          </div>
      </div>




      </div>
    </div>
  )
}

export default yourJourney;