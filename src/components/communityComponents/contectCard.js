import React from "react";

/**
 * @fileoverview: The contactCard.js component returns a list of cards that dispalys either a therapist or a user in their respecive sections
 * @author: Ryan Spowart
 * @param {props}: items - an array of user or therapist items
 * @component App() - Returns JSX
 * @requires: npm install react
 */

const ContactCard = (props) => {
{/*converting the props items into an easier to use state */}
    const items = props.items;

    /**
     * @function: the list items constant converts the items input to a series of divs
     */
    const listItems = items.map(item =>{
        return     <div className = "contactCard">
                        <div className="icon">
                            <p>{item.username.charAt(0).toUpperCase()}</p>
                        </div>
                        <h2>@{item.username}</h2>
                        <button className="connect">Connect</button>
                    </div>
    })

  return (
    //returns the list of items within a containing div
    <div className="cardContainer">{listItems}</div>
  )
}

export default ContactCard; // Export the community module