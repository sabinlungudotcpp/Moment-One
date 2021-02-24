import React from "react";
import Header from "./Header";
import moodGreat from "../imageAssets/Mood Tracker/moodGreat.png";
import moodGood from "../imageAssets/Mood Tracker/moodGood.png";
import moodMeh from "../imageAssets/Mood Tracker/moodMeh.png";
import moodeBad from "../imageAssets/Mood Tracker/moodBad.png";
import moodAwful from "../imageAssets/Mood Tracker/moodAwful.png";

const Home = () => { // Home Component
  return (
    <div className = "Page">
      {/*importing the header component*/}
      <Header title="WELCOME BACK,"/>

      <div className="Content">
        <div className="contentGrid">
          <div className="journal">
              <h2>Your Moments Journal </h2>
              <form className="journal_form">
                <div className="journal_underline"></div>
                <button class="jounral_categories">Categories</button>
              </form>
          </div> 

          <div className="infoWrap">
              
          </div> 
          <div className="momentForm">
              <div className="momentForm_top-section">
                <h2>Good afternoon, Username!</h2>
                <h2>How are you feeling?</h2>

                <div className="feelingWrapper">
                  <div className="feelingSelect">
                    <img src = {moodGreat} className="feelingIcon"></img>
                    <p>Great</p>
                  </div>

                  <div className="feelingSelect">
                    <img src = {moodGood} className="feelingIcon"></img>
                    <p>Good</p>
                  </div>

                  <div className="feelingSelect">
                  <img src = {moodMeh} className="feelingIcon"></img>
                    <p>Meh</p>
                  </div>

                  <div className="feelingSelect">
                    <img src = {moodeBad} className="feelingIcon"></img>
                    <p>Bad</p>
                  </div>

                  <div className="feelingSelect">
                    <img src = {moodAwful} className="feelingIcon"></img>
                    <p>Awful</p>
                  </div>


                </div>
              </div>
              <div className="momentForm_center-section">
                <p> Add Category </p>
              </div>
              <div className="momentForm_bottom-section">
                
              </div>
              
          </div>
          <div></div>
        </div>
      </div>
    </div>

  )
}

export default Home; // Export home