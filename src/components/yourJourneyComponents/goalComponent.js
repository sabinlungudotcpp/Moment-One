import React from "react";

class goals extends React.Component{

    state = {
        progress:'70',
        title:'',
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        return (
            <div className="goalComponent">
                <div className="percentDis"></div>
                <h1></h1>
            </div>
          )
    }
}

export default goals;