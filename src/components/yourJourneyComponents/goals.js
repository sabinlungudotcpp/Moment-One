import React from "react";
import plus from "../../imageAssets/Icons/General/plus.png";
import GoalComponent from "./goalComponent";
class goals extends React.Component{

    state = {
        goalNumber:4,
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        return (
            <div className="goals">
                <div className="contentWrapper">
                    <h2 className="goalTitle">My goals</h2>
                    <p className="goalSubtitile">Rememebr you are doing this for yourself!</p>
                    {/* need to research a way to translate the goal number into the grid size */}
                    <div className="goalContainer">
                        <div className="addGoal">
                            <img src = {plus} className="plus"/>
                            <p className="addGoalText"> Add a new goal to achieve</p>
                        </div>

                        <GoalComponent />
                        <GoalComponent />
                        <GoalComponent />
                        <GoalComponent />
                    </div>
                </div>


            </div>
          )
    }
}

export default goals;