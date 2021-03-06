import React from "react";
import goalIcon from "../../imageAssets/Icons/General/goalIcon.png";
/**
 * @fileoverview: Goal.js returns a users goal
 * @author: Ryan Spowart
 * @param {props}: goals will be passed in at some point -- nonfunctional at the moment
 * @component App() - Returns JSX
 * @requires: npm install react
 */

const Goal = (props) => {

  return (
    <div className = "goalList">
        <div className="icon">
            <div className="circle">
                <h1>85%</h1>
            </div>
        </div>

        <div className="contentWrap">
            <h2 className="title"> Weekly Goal</h2>
            <p className ="desc">brief description about their goal, laurem ipsum laurem ipsum laurem ipsum</p>
        </div>

        <img src={goalIcon} alt="goalIcon" />
    </div>
  )
}

export default Goal; // Export the Self Awareness module