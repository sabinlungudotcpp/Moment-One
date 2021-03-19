import React from "react";
import likes from "../../imageAssets/Icons/General/likesWhite.png";
const formCard = (props) => {

    return (
        <div className="formCardContent">
            <div className="topSection">
                <div className="icon"></div>
                <div className = "text">
                    <h2 className="title">{props.title}</h2>
                    <h3 className="category">{props.category}</h3>
                </div>

            </div>
            <p className="middleSection">{props.content}</p>
            <div className="bottomSection">
                <div className="icon"></div>
                <div className="textWrap">
                    <h2 className="username">@{props.username}</h2>
                    <h3 className="level">level {props.level}</h3>
                </div>

                <p className = "likes"><img src={likes}/>{props.likes}</p>

            </div>
        </div>
        )
    
}

export default formCard;