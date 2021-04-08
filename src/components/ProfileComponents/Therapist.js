import React from "react";
import therChat from "../../imageAssets/Icons/General/therChat.png";

const Therapist = (props) => {

  return (
    <div className = "therapist">
        <div className="icon"></div>
        <div className="textWrap">
            <h3 className="category">PTSD</h3>
            <h2>@username</h2>
            <p>Last Spoken to 2 mins ago</p>
        </div>
        <img src={therChat} alt="chatIcon"/>
    </div>
  )
}

export default Therapist; // Export the Self Awareness module