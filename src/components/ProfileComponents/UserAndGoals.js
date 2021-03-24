import React from "react";
import progressIcon from "../../imageAssets/Icons/General/iconDelivery.png"
//displays user with wellbeing information
const userAndGoals = (props) => {

  return (
    <div className = "userAndGoals">
        <div className ="profilePicture"></div>
        <h2 className="username">@{props.username}</h2>
        <div className="levelContainer"><p className = "level">level {props.level}</p></div>
        <div className="goal">
            <h2 className>Weekly Goal</h2>
            <p className="description"> This is a brief description to remind user of their daily goals,
                 favourite quotes or anything it can help them stay motivated when accessing profile. </p>
            <div className ="progress">
                <div className="imgWrap"><img src={progressIcon}/></div>
                <div className="textWrap">
                    <p>{props.progress}% Progress</p>
                    <p>Well done, Keep it up!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default userAndGoals; // Export the Self Awareness module