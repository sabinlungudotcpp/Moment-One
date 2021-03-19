import React from "react";

class goals extends React.Component{

    state = {
        progress:this.props.percent + '%',
        title:this.props.title,
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //changes the height of the percentage
    disPerc = function(){
        return{
            height: this.state.progress,
        }
    }

    render() {
        let inputStyle = {
            height: this.state.progress.value
          };
          // change code below this line



        return (
            <div className="goalComponent">
                <div id="percentDiv" className="percentDis" style={this.disPerc()}>
                    <div className="goalContent">
                        <h1>{this.state.title}</h1>
                        <div className="progressWrap">
                            <h2>{this.state.progress}</h2>
                        </div>
                        <button className="progress">Progress</button>
                        <button className="checkReward">Check Reward</button>
                    </div>
                </div>
                
            </div>
          )
    }
}

export default goals;