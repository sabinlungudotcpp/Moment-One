import React from "react";
import Header from "./Header";

function yourJourney() {
  return (
    <div className = "Page">
      {/*importing the header component*/}
      <Header title="Your Journey"/>
      <div className="Content">
        <div className = "journeyContentGrid">
          
          <div className="profileMomentsWrap">
            <div className="profile">
              <div className="profileContent">
                <div className="profileImg"></div>
                <div className="titleText">
                  <h1>@username</h1>
                  <h2>users name</h2>
                </div>
              </div>
                <p>"About me section where the user can input a bio about themself, like a quote etc" </p>
              </div>

            <div className="topMoments">
              <h1>topMoments</h1>
            </div>
              
          </div>



            <div className="community">
              <h1>My Community</h1>
            </div>
            <div className="awarenessGrowthWrap">
              <div className="selfAwareness">
                <h1>Your self-awareness growth</h1>
              </div>
              <div className="goals">
                <h1>My goals</h1>
              </div>
            </div>
            <div></div>
          </div>
      </div>
    </div>
  )
}

export default yourJourney;