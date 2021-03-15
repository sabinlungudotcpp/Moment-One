import React from "react";
class selfAwareness extends React.Component{

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
            <div className="selfAwareness">
                <div className="contentWrapper">
                    <h2 className="title">Your self-awareness growth</h2>
                    <p className="subtitile">Your progress in the last 100 days</p>
                    <div className="contentContainer">
                    </div>
                </div>


            </div>
          )
    }
}

export default selfAwareness;