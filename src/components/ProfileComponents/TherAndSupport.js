import React from "react";
import Therapist from "./Therapist";
import Goal from "./Goal";
/**
 * @fileoverview: TherAndSupport.js returns a component containing two lists, one of therapist components and one of goal components
 * @author: Ryan Spowart
 * @param {props}: N/A
 * @component App() - Returns JSX
 * @requires: npm install react
 */

const therAndSupport = (props) => {

  return (
    <div className = "therAndSupport">
      <div className="favouriteTherapists">
        <div className="titleSec">
          <h2>Favourite Therapists</h2>
        </div>
        {/* therapist list */}
        <Therapist />
        <Therapist />
        <Therapist />
      
      </div>
      <div className="yourGoals">
        <div className="titleSec">
          <h2>Your Goals</h2>
          <h3 className = "inProgress">in progress</h3>
          <h3 className = "achieved">achieved</h3>
          <h3 className = "add">+</h3>
        </div>
        {/* Goal list */}
        <Goal />
        <Goal />
        <Goal />
      </div>
    </div>
  )
}

export default therAndSupport; // Export the Self Awareness module