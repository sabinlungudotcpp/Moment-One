import React from "react";
import Header from "../GenericComponents/Header";
import MomentForm from "./momentForm";
import JournalDis from "./Journal";

const Home = () => { // Home
  return (
    <div className = "Page">
      <Header title="Your Moments Dashboard" grayTitle = "Welcome username"/>

      <div className = "Content">
        <div className = "contentGrid">
            <MomentForm />
            <JournalDis/>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home; // Export home