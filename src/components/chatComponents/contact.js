import React from "react";
    /**
 * @fileoverview: The contact.js component returns a contact div for displaying in a list
 * @author: Ryan Spowart
 * @param {props}: Username - the contatcts username | lastmsg - the last message sent between the user viewing the contact and the contact
 * @component App() - Returns JSX
 * @requires: npm install React
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