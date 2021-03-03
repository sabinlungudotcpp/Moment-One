import React from "react";

import Header from "./Header";
import handbook from "../imageAssets/Handbook Illustration/Handbook Illustration.png";

const Home = () => { // Home Component
  return (
    <div className = "Page">
      <Header title="Welcome"/>

      <div className="Content">
        <div className="contentGrid">
          <JournalDis/>

          <div className="infoWrap">
                <Therapists />
              <div className="handbook">

                <img src={handbook} alt="Handbook"></img>
                <p>HandBook</p>
              </div>
          </div> 
          <div className="momentForm">
              <div className="momentForm_top-section">
                <h2>Good afternoon, Username!</h2>
                <h2>How are you feeling?</h2>

                <div className="feelingWrapper">
                  <button class="feelingSelect">
                    <img src = {moodGreat} className="feelingIcon"></img>
                    <p>Great</p>
                  </button>

                  <button class="feelingSelect">
                    <img src = {moodGood} className="feelingIcon"></img>
                    <p>Good</p>
                  </button>

                  <button class="feelingSelect">
                  <img src = {moodMeh} className="feelingIcon"></img>
                    <p>Meh</p>
                  </button>

                  <button class="feelingSelect">
                    <img src = {moodeBad} className="feelingIcon"></img>
                    <p>Bad</p>
                  </button>

              </div>
          </div>

          <MomentForm />

          <div></div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Home; // Export home