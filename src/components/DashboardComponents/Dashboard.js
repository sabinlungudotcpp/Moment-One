import React from "react";
import Header from "../GenericComponents/Header";
import MomentForm from "./momentForm";
import JournalDis from "./Journal";
//The Dashboard page, where the user can create and see their moments
const Dashboard = () => { 
  return (
    <div className = "Page">
      <Header title="Your Moments Dashboard" grayTitle="Welcome username"/>

      <div className = "Content">
        <div className = "contentGrid">
          {/* displays the moment form input*/}
          <MomentForm />
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