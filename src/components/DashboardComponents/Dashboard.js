import React,{useState} from "react";
import Header from "../GenericComponents/Header";
import MomentForm from "./momentForm";
import JournalDis from "./Journal";

const Dashboard = (props) => { // Home Component
  return (
    <div className = "Page">
      <Header title="Your Moments Dashboard" grayTitle="Welcome username"/>

      <div className = "Content">
        <div className = "contentGrid">
          {/* displays the moment form input*/}
          <MomentForm/>
          {/* displays the journal, total moments and answers */}
          <JournalDis/>

          <div>
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard; // Export home