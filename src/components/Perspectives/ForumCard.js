import React from "react";
import likes from "../../imageAssets/Icons/General/likesWhite.png";
//cards that display a users form discussions
const formCard = (props) => {
    //const items = props.items;
    return (   
        
        <div className="formCardContent">{/* card title and image */}
            <div className="topSection">
                <div className="icon"></div>
                <div className = "text">
                    <h2 className="title">{props.title}</h2>
                    <h3 className="category">{props.category}</h3>
                </div>
            </div>
            {/* discussion description */}
            <p className="middleSection">{props.content}</p>

            {/* Poster Info */}
            <div className="bottomSection">
                <div className="icon"></div>
                <div className="textWrap">
                    <h2 className="username">@{props.username}</h2>
                    <h3 className="level">level {props.level}</h3>
                </div>

                <p className = "likes"><img src={likes} alt="likes"/>{props.likes}</p>

            </div>
        </div>
        )
    
}

export default formCard;