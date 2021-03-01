import React from "react";
import axios from'axios';

class momentForm extends React.Component{
    state ={
        Category:'',
    }
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return (
            <div className="journal">

              <h2>Your Moments Journal </h2>

              <form className="journal_form">
                <div className="journal_underline"></div>
                <button class="jounral_categories">Categories</button>
              </form>
            <div className="momentList">

            <div className="moment">
                <div className="icon"></div>
                <div className="momentText">
                    <h2 className="momentTitle">TITLE</h2>
                    <p>A brief description of the moment will apprear here on a maximum height of two lines...</p>
                    <p className="dateText">March 1st,2021</p>
                </div>
            </div>
            <div className="moment">
                <div className="icon"></div>
                <div className="momentText">
                    <h2 className="momentTitle">TITLE</h2>
                    <p>A brief description of the moment will apprear here on a maximum height of two lines...</p>
                    <p className="dateText">March 1st,2021</p>
                </div>
            </div>
            <div className="moment">
                <div className="icon"></div>
                <div className="momentText">
                    <h2 className="momentTitle">TITLE</h2>
                    <p>A brief description of the moment will apprear here on a maximum height of two lines...</p>
                    <p className="dateText">March 1st,2021</p>
                </div>
            </div>
            <div className="moment">
                <div className="icon"></div>
                <div className="momentText">
                    <h2 className="momentTitle">TITLE</h2>
                    <p>A brief description of the moment will apprear here on a maximum height of two lines...</p>
                    <p className="dateText">March 1st,2021</p>
                </div>
            </div>
            <div className="moment">
                <div className="icon"></div>
                <div className="momentText">
                    <h2 className="momentTitle">TITLE</h2>
                    <p>A brief description of the moment will apprear here on a maximum height of two lines...</p>
                    <p className="dateText">March 1st,2021</p>
                </div>
            </div>

            </div>



            </div>
          )
    }
}

export default momentForm;