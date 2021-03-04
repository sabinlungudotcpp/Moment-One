import React from "react";
import Header from "./Header";
import handbook from "../imageAssets/Handbook Illustration/Handbook Illustration.png";
import MomentForm from "./homeComponents/momentForm";
import JournalDis from "./homeComponents/Journal";
import Therapists from "./homeComponents/therapists";

const Home = () => { // Home
  return (
    <div className = "Page">
      <Header title="Welcome"/>

      <div className = "Content">
        <div className = "contentGrid">
          <JournalDis/>

          <div className="infoWrap">
                <Therapists />
              <div className="handbook">

                <img src={handbook} alt="Handbook"></img>
                <p>HandBook</p>
              </div>
          </div>

          <MomentForm />

          <div>
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home; // Export home