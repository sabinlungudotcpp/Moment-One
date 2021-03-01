import React from "react";

import Header from "./Header";
import handbook from "../imageAssets/Handbook Illustration/Handbook Illustration.png";
import MomentForm from "./momentForm";
import JournalDis from "./Journal"

const Home = () => { // Home Component
  return (
    <div className = "Page">
      {/*importing the header component*/}
      <Header title="WELCOME BACK,"/>

      <div className="Content">
        <div className="contentGrid">

          <JournalDis/>

          <div className="infoWrap">
              <div className="therapists">
                <p>Favourite Therapists</p>
                <form className="searchbar">
                  <input type="text" id = "search" className="search"></input>
                </form>

              </div>
              <div className="handbook">
                <img src={handbook} alt="Handbook"></img>
                <p>HandBook</p>
              </div>
          </div>

          <MomentForm />
          
          <div></div>
        </div>

      </div>
    </div>

  )
}

export default Home; // Export home