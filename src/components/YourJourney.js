import React from "react";
import Header from "./Header";
import Goals from "./yourJourneyComponents/goals"
import SelfAwareness from "./yourJourneyComponents/selfAwarenessGraph"
import CommunityComponent from "./yourJourneyComponents/communityComponent";

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
              <CommunityComponent />
            </div>
            <div className="awarenessGrowthWrap">

              <SelfAwareness />
              <Goals />

            </div>
            <div></div>
          </div>
      </div>
    </div>
  )
}

export default yourJourney;