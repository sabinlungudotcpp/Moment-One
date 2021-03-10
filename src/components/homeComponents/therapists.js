
import React from 'react';
import searchIcon from "../../imageAssets/Icons/General/search.png"
import UserBubble from "../userBubble";
const Dash_Therapists = () => {
  
        return (
          <div className="therapists">
              <p>Favourite Therapists</p>

              <form className="searchbar">
                <img className = "seachIcon" src={searchIcon} />
                <input type="text" id = "search" className="search"></input>
              </form>
   
            <div className="therapistGrid">
              <UserBubble name="name" title="dr" />
              <UserBubble name="name" title="dr" />
              <UserBubble name="name" title="dr" />
              <UserBubble name="name" title="dr" />
              <UserBubble name="name" title="dr" />
              <UserBubble name="name" title="dr" />
            </div>
          </div>
        )
    }
      
export default Dash_Therapists;