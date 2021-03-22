import React from "react";
import Discussion from "./Discussion";
import loadMoreIcon from "../../imageAssets/Icons/General/ic_chevron.png";
//the most popular discussion currently
const moreDiscussions = () => {
    
    return (
        <div className="moreDiscussions">
            <div className="contentWrapper">{/* title*/}
                <h2 className="title">More Discussions</h2>
                <h3 className = "subTitle">Here are more user discussions to get inspired</h3>
            </div>
            <div className="discussionsContainer">
                {/* discussion returns a series of divs into this one to be displayed */}
                    <Discussion 
                    title="How’s everyone doing during the pandemic?"
                    username="Head Marketing"
                    date="24 june 2020"
                    category="PTSD"
                    likes="250k"
                    content="We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!"
                    />
                    <Discussion />
                    <Discussion />
                    <Discussion />
                    <Discussion />
                    <Discussion />
            </div>
            <button className="loadMore"><p>Load More</p><img src={loadMoreIcon} alt="moreIcon"/></button>
        </div>
    )
    
}

export default moreDiscussions;