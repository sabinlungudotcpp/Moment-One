import React from "react";
import Header from "./Header";
import moodGreat from "../imageAssets/Mood Tracker/moodGreat.png";
import moodGood from "../imageAssets/Mood Tracker/moodGood.png";
import moodMeh from "../imageAssets/Mood Tracker/moodMeh.png";
import moodeBad from "../imageAssets/Mood Tracker/moodBad.png";
import moodAwful from "../imageAssets/Mood Tracker/moodAwful.png";
import handbook from "../imageAssets/Handbook Illustration/Handbook Illustration.png";
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
              <div className="therapists">
                <p>Favourite Therapists</p>
                <form className="searchbar">
                  <input type="text" id = "search" className="search"></input>
                </form>
              </div>
              <div className="handbook">
                <img src={handbook}></img>
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

                  <button class="feelingSelect">
                    <img src = {moodAwful} className="feelingIcon"></img>
                    <p>Awful</p>
                  </button>


                </div>
              </div>
              <div className="momentForm_center-section">
                <p> Add Category </p>
                <div className="category_wrap">
                  <button class="category_select">General</button>
                  <button class="category_select">Anxiety</button>
                  <button class="category_select">PTSD</button>
                  <button class="category_select">Depression</button>
                  <div></div>
                  <button class="category_select">Weight Loss</button>
                </div>

              </div>
              <div className="momentForm_bottom-section">
                <p>What's on your mind today?</p>
                <textarea className="mind"></textarea>
                <p>Tell us more about how you feel...</p>
                <textarea className="feelings"></textarea>
                <div className="selfAware_wrapper">
                  <p>Do you feel self aware?</p>
                  <label class="switch">
                    <input type="checkbox" checked></input>
                    <span class="slider round"></span>
                  </label>
                </div>
                <div className="btn_wrapper">
                  <button className="create">Create</button>
                </div>
                
              </div>
              
          </div>
          <div></div>
        </div>
      </div>
    </div>

  )
}

export default Home; // Export home