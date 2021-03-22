import React from "react";
import Header from "../GenericComponents/Header";
import searchIcon from "../../imageAssets/Icons/General/search.png"
import Contact from "./contact"
const LiveChat = () => { // Live Chat component

  return (
    <div className = "Page">
       <Header title="Chat" blueTitle="Chat " grayTitle="&nbsp;| current person?"/>
      <div className="pageContent">
        <div className = "chatWindow">
          <div className = "contacts">
            {/* allows user to search contacts */}
            <form className="searchbar">
              <input type="text" id = "search" className = "search" placeholder="Search..."></input>
              <img className = "seachIcon" src = {searchIcon} alt="search"/>
            </form>
            {/* displays the recent contacts of the user */}
            <div className="contacts_list">
              <Contact username="username" lastMsg="Last message on a line.." age="2h"/>
            </div>
          </div>
          {/* Where the chat bubbles are displayed*/}
          <div className ="chat">
            <div className="messageBox">
              <div className = "overlay">
                <h1>@username</h1>
              </div>
            </div>
            <form className="messageInput">
              <input type="text" id = "message" className = "messageBox" placeholder="Type a message..."></input>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LiveChat; // Export home