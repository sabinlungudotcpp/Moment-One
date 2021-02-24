import React from "react";

import moodGreat from "../imageAssets/Mood Tracker/moodGreat.png";
import moodGood from "../imageAssets/Mood Tracker/moodGood.png";
import moodMeh from "../imageAssets/Mood Tracker/moodMeh.png";
import moodeBad from "../imageAssets/Mood Tracker/moodBad.png";
import moodAwful from "../imageAssets/Mood Tracker/moodAwful.png";

class momentForm extends React.Component{
    state ={
        currentfeeling:'',
        category:'',
        onYourMind:'',
        howYouFeel:'',
        selfAware:false,
    }

    change = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }
    render(){
        return (
            <form className="momentForm">
                <div className="momentForm_top-section">
                    <h2>Good afternoon, Username!</h2>
                    <h2>How are you feeling?</h2>
        
                    <div className="feelingWrapper">

                        <div className="feelingSelect">
                            <input type="image" src={moodGreat} className="feelingIcon" name='currentfeeling' value="Great" onClick={e=>this.change(e)}/>
                            <p>Great</p>
                        </div>

                        <div className="feelingSelect"  >
                            <input type="image" src={moodGood} className="feelingIcon" name='currentfeeling' value="Good" onClick={e=>this.change(e)}/>
                            <p>Good</p>
                        </div>
                        <div className="feelingSelect">
                            <input type="image" src={moodMeh} className="feelingIcon" name='currentfeeling' value="Meh" onClick={e=>this.change(e)}/>
                            <p>Meh</p>
                        </div>
                        <div className="feelingSelect"  >
                            <input type="image" src={moodeBad} className="feelingIcon" name='currentfeeling' value="Bad" onClick={e=>this.change(e)}/>
                            <p>Bad</p>
                        </div>
                        <div className="feelingSelect"  >
                            <input type="image" src={moodAwful} className="feelingIcon" name='currentfeeling' value="Awful" onClick={e=>this.change(e)}/>
                            <p>Awful</p>
                        </div>
                    </div>
                </div>
        
                <div className="momentForm_center-section">
                    <p> Add Category </p>
                    <div className="category_wrap">
                        <input type="button" class="category_select" name="category" value="General" onClick={e=>this.change(e)}/>
                        <input type="button" class="category_select" name="category" value="Anxiety" onClick={e=>this.change(e)}/>
                        <input type="button" class="category_select" name="category" value="PTSD" onClick={e=>this.change(e)}/>
                        <input type="button" class="category_select" name="category" value="Depression" onClick={e=>this.change(e)}/>
                        <input type="button" class="category_select" name="category" value="Weight Loss" onClick={e=>this.change(e)}/>
                    </div>
                </div>
        
                <div className="momentForm_bottom-section">
                    <p>What's on your mind today?</p>
                    <textarea className="mind" name="onYourMind" onChange={e=>this.change(e)} rows="12" cols="50"/>
        
                    <p>Tell us more about how you feel...</p>
                    <textarea className="feelings" name="howYouFeel" onChange={e=>this.change(e)}/>
        
                    <div className="selfAware_wrapper">
                        <p>Do you feel self aware?</p>
                        <label class="switch">
                            <input type="checkbox" checked={e=>this.change(e)} onClick={this.state.selfAware = true}/>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div className="btn_wrapper">
                        <button onClick={e => this.onSubmit(e)} className="create">Create</button>
                    </div>
                </div>
            </form>
        
          )
    }
}

export default momentForm;