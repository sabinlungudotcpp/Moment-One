import React from "react";
    /**
 * @fileoverview: returns a contact
 * @author: Ryan Spowart
 * @param {props}: Username - the contatcts username | lastmsg - the last message sent between the user viewing the contact and the contact
 * @component App() - Returns JSX
 * @requires: react
 */

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