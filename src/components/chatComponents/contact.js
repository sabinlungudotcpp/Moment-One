import React from "react";

const contact = (props) => { // Live Chat component

  return (
    <div className="contact">
        <div className="icon"/>
        <div className = "textContent">
            <h2 className="username">@{props.username}<p>{props.age}</p></h2>
            <h3 className="lastmsg">{props.lastMsg}</h3>
        </div>

    </div>
  )
}
export default contact; // Export home