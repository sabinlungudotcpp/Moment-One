import React from "react";
import Header from "../GenericComponents/Header";
import UserAndGoals from "./UserAndGoals";
import TherAndSupport from "./TherAndSupport";
import LevelTrack from "./levelTrack";
import PersonalGrowth from "./personalGrowth";
//displays user with wellbeing information
const Profile = () => {

  return (
    <div className = "Page">
      <Header title="Profile" blueTitle="Profile" grayTitle="&nbsp;| Your Your data & stats"/>
        <div className="content">
            <div className="profileContent">
                <div className="leftSection">
                    <UserAndGoals username="username" level='2' progress='83'/>
                    <LevelTrack />
                </div>
                <div className="rightSection">
                    <TherAndSupport />
                    <PersonalGrowth />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile; // Export the Self Awareness module