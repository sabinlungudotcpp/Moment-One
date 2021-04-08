import React from "react";
import Header from "../GenericComponents/Header";
import searchIcon from "../../imageAssets/Icons/General/search.png"
import Contact from "./contact"
import ChatBubble from "./chatBubble";

    /**
 * @fileoverview: The liveChat.js component returns the content of the live-chat page to the user
 * @author: Ryan Spowart
 * @component App() - Returns JSX
 * @requires: npm install react | contact.js | chatBubble.js
 */

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
              {/*chat messages */}
              <div className="message">
                <ChatBubble chat="Sup dude!"/>
                <ChatBubble chat="Sup dude!"/>
                <ChatBubble chat="Sup dude!"/>
                <ChatBubble chat="Sup dude!"/>
                <ChatBubble chat="Sup dude!"/>
                <ChatBubble chat="Sup dude!"/>
                <ChatBubble chat="Sup dude!"/>
                <ChatBubble chat="Sup dude!"/>
                <ChatBubble chat="Sup dude!"/>
                <ChatBubble chat="Sup dude!"/>
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