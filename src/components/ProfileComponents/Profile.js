import React from "react";
import Header from "../GenericComponents/Header";
import UserAndGoals from "./UserAndGoals";
import TherAndSupport from "./TherAndSupport";
import LevelTrack from "./levelTrack";
import PersonalGrowth from "./personalGrowth";
/**
 * @fileoverview: Profile.js returns the personal profile of the user dispalying: goals, mentor info, their level, and a graph shwoing their progress
 * @author: Ryan Spowart
 * @param {props}: N/A
 * @component App() - Returns JSX
 * @requires: npm install react
 */

const Profile = () => {

  return (
    <div className = "Page">
      {/* page title and subtitle */}
      <Header title="Profile" blueTitle="Profile" grayTitle="&nbsp;| Your Your data & stats"/>
        <div className="content">
            <div className="profileContent">
                <div className="leftSection">
                  {/* displayign left column sub components */}
                    <UserAndGoals username="username" level='2' progress='83'/>
                    <LevelTrack />
                </div>
                <div className="rightSection">
                  {/* displayign right column sub components */}
                    <TherAndSupport />
                    <PersonalGrowth />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile; // Export the Self Awareness module