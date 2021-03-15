import React from "react";
import searchIcon from "../../imageAssets/Icons/General/search.png"
import UserBubble from "../userBubble"
class ComunityComp extends React.Component{

    state = {
        category:'',
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        return (
            <div className="communityComponent">
                <div className="contentWrapper">
                    <h2 className="title">My community</h2>
                    <form className="searchbar">
                        <img className = "seachIcon" src={searchIcon} />
                        <input type="text" id = "search" className="search"></input>
                    </form>
                    <div className="sectionTitleTop">
                        <h2 className="sectionTitle"> Therapists </h2>
                        <button className="seeAll">See all </button>
                    </div>
                    
                    <div className="contentContainer">
                        <UserBubble name="name" title="dr"/>
                        <UserBubble name="name" title="dr"/>
                        <UserBubble name="name" title="dr"/>
                        <UserBubble name="name" title="dr"/>
                        <UserBubble name="name" title="dr"/>
                        <UserBubble name="name" title="dr"/>
                    </div>
                    <div className="sectionBorder"></div>
                    <div className="sectionTitleTop">
                        <h2 className="sectionTitle"> Supporters </h2>
                        <button className="seeAll">See all </button>
                    </div>
                    
                    <div className="contentContainer">
                        <UserBubble name="name" title="dr"/>
                        <UserBubble name="name" title="dr"/>
                        <UserBubble name="name" title="dr"/>
                        <UserBubble name="name" title="dr"/>
                        <UserBubble name="name" title="dr"/>
                        <UserBubble name="name" title="dr"/>
                    </div>
                </div>


            </div>
          )
    }
}
export default ComunityComp;