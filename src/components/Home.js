import React from "react";

import Header from "./Header";
import handbook from "../imageAssets/Handbook Illustration/Handbook Illustration.png";
import MomentForm from "./momentForm";
import JournalDis from "./Journal"
import Therapists from "./Dash_Therapists"

const Home = () => { // Home
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

          <MomentForm />

          <div></div>
        </div>

      </div>
    </div>
  )
}

export default Home; // Export home