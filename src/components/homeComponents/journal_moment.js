import React,{Component} from 'react';

class moment extends Component {
    render() {
        return(
            <div className="moment">
            <div className="icon"></div>
            <div className="momentText">
                <h2 className="momentTitle">{this.props.title}</h2>
                <p>{this.props.content}</p>
                <p className="dateText">{this.props.date}</p>
            </div>
        </div>
        )
    }
}

export default moment;