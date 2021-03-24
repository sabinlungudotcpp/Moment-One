import React,{useState}from "react";
const ContactCard = (props) => {
    const items = props.items;
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
    <div>{listItems}</div>
  )
}

export default ContactCard; // Export the community module