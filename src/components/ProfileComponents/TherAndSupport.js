import React from "react";
import Therapist from "./Therapist";
import Goal from "./Goal";
//displays user with wellbeing information
const therAndSupport = (props) => {

  return (
    <div className = "therAndSupport">
      <div className="favouriteTherapists">
        <div className="titleSec">
          <h2>Favourite Therapists</h2>
        </div>
        <Therapist />
        <Therapist />
        <Therapist />
      
      </div>
      <div className="yourGoals">
        <div className="titleSec">
          <h2>Your Goals</h2>
        </div>
        <Goal />
        <Goal />
        <Goal />
      </div>
    </div>
  )
}

export default therAndSupport; // Export the Self Awareness module