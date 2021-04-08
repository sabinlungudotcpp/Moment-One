import React from "react";
import axios from 'axios';
import moodGreat from "../../imageAssets/Mood Tracker/moodGreat.png";
import moodGood from "../../imageAssets/Mood Tracker/moodGood.png";
import moodMeh from "../../imageAssets/Mood Tracker/moodMeh.png";
import moodeBad from "../../imageAssets/Mood Tracker/moodBad.png";
import moodAwful from "../../imageAssets/Mood Tracker/moodAwful.png";

/**
 * @fileoverview: The Moment Form stores all of the JSX for rendering the feelings form to the user to fill out
 * @author: Sabin Constantin Lungu, Ryan Spowart
 * @param {props}: The props parameter is used to store properties from other components that are rendered on this screen
 * @component App() - Returns JSX
 * @requires: npm install react-router-dom
 */

class momentForm extends React.Component {

    constructor(props) { // Constructor for the moment form
        super(props);
        
        this.state = { // State for the moment form
            moment: {
                title: '', // Title of the moment
                description: '', // Description of the moment
                category: '', // Category of the moment
                feeling: '', // User feeling attribute
                selfAware: false,
            },
            error:'',
        }
    }

    

    /**
     * @function: resState resets the state of the component to default values
     */
    resState() {
        this.setState({
            moment : {
                title: '',
                description: '',
                category: '',
                feeling: '',
                selfAware: false,
            }
        });
    }

    /**
     * @function: The validate function is used to validate the form entry fields. If they are left empty, an error message is displayed
     */
    validate() {

        if(this.state.moment.title === '') { // If the title is empty
            return "Please enter whats on your mind";
        }
        
        else if(this.state.moment.description === '') {
            return "Please say how you feel";
        }
        
        else if(this.state.category ==='') {
            return "please enter a category";
        }
        
        else if(this.state.feeling === '') {
            return "please enter how you are feeling";
        }
        
        else {
            return '';
        }
    }

    /**
     * @function: change updates the state using the item name it is called within and the value of the item
     */
    change = (e) => {
        this.setState({// Sets the state of the variables by spreading all the values from the moment object
            moment: {...this.state.moment,[e.target.name]: e.target.value}
        });
    }

    /**
     * @function: awareToggle states state using the item name and sets it to the checked value of the object it is called within
     */
    awareToggle = (e) => {

        this.setState({
            moment: {...this.state.moment, [e.target.name]: e.target.checked}
        });
    }
    
    /**
     * @function: onSubmit calls the validate function, checks if there are any errors, submits the data to the posts database file then resets the state to default
     */
    onSubmit = async (e) => {
        e.preventDefault();
        this.setState({error:this.validate()});

        if(this.state.error === '') {
            await axios.post('http://localhost:8001/api/v1/momentone/posts', this.state.moment);
            this.resState();   
        }
    }

    render() { // Renders JSX on the screen

        return (

            <form className = "momentForm" onSubmit={e => this.onSubmit(e)}>
                <div className="momentForm_top-section" >

                    <h2>Good afternoon, Username!</h2>
                    <h2>How are you feeling?</h2>

                    {/* Section of form for selecting the current feeling */}
                    <div className="feelingWrapper">

                        <label className = "feelingSelect">
                            <input type="radio" name='feeling' value ='Great' onChange = {e => this.change(e)} />
                            <img src = {moodGreat} alt="Great" className="feelingIcon" />
                            <p>Great</p>
                        </label>


                        <label className = "feelingSelect">
                            <input type="radio" name='feeling' value='Good' checked={this.state.moment.feeling === 'Good'} onChange={e => this.change(e)} />
                            <img src={moodGood} alt="Good" className="feelingIcon" />
                            <p>Good</p>
                        </label>


                        <label className = "feelingSelect">
                            <input type="radio" name='feeling' value='Meh' checked={this.state.moment.feeling === 'Meh'} onChange={e => this.change(e)} />
                            <img src={moodMeh} alt="Meh" className="feelingIcon" />
                            <p>Meh</p>
                        </label>

                        <label className="feelingSelect">
                            <input type="radio" name='feeling' value='Bad' checked={this.state.moment.feeling === 'Bad'} onChange={e => this.change(e)} />
                            <img src={moodeBad} alt="Bad" className="feelingIcon" />
                            <p>Bad</p>
                        </label>


                        <label className="feelingSelect">
                            <input type="radio" name='feeling' value='Awful' checked={this.state.moment.feeling === 'Awful'} onChange={e => this.change(e)} />
                            <img src={moodAwful} alt="Awful" className="feelingIcon" />
                            <p>Awful</p>
                        </label>
                    </div>
                </div>

                {/* Section of form for selecting catigory of the moment*/}
                <div className="momentForm_center-section">
                    <p> Add Category </p>
                    <div className="category_wrap">

                        <label className="category_select">
                            <input type="radio" name='category' value='General' checked={this.state.moment.category === 'General'} onChange={e => this.change(e)} />
                            <p className="categoryLabel">General</p>
                        </label>

                        <label className="category_select">
                            <input type="radio" name='category' value='Anxiety' checked={this.state.moment.category === 'Anxiety'} onChange={e => this.change(e)} />
                            <p className="categoryLabel">Anxiety</p>
                        </label>

                        <label className="category_select">
                            <input type="radio" name='category' value='PTSD' checked={this.state.moment.category === 'PTSD'} onChange={e => this.change(e)} />
                            <p className="categoryLabel">PTSD</p>
                        </label>

                        <label className="category_select">
                            <input type="radio" name='category' value='Depression' checked = {this.state.moment.category === 'Depression'} onChange={e => this.change(e)} />
                            <p className="categoryLabel">Depression</p>
                        </label>

                        <label className="category_select">
                            <input type="radio" name='category' value='Weight Loss' checked={this.state.moment.category === 'Weight Loss'} onChange={e => this.change(e)} />
                            <p className="categoryLabel">Weight Loss</p>
                        </label>

                    </div>
                </div>

                {/* Section for inputing details of the users feelings into textboxes*/}
                <div className="momentForm_bottom-section">
                    <p>What's on your mind today?</p>
                    <textarea className="mind" value={this.state.moment.title} name="title" onChange={e => this.change(e)} rows="12" cols="50" />

                    <p>Tell us more about how you feel...</p>
                    <textarea className="feelings" value={this.state.moment.description} name="description" onChange={e => this.change(e)} />

                    <div className="selfAware_wrapper">
                        <p>Do you feel self aware?</p>
                        <label className="switch">
                            <input type="checkbox" name="selfAware" onClick={e => this.awareToggle(e)} />
                            <span className="slider round"></span>
                        </label>
                    </div>

                    {/*Button for submitting the form*/}
                    <div className="btn_wrapper">
                        <button type='submit' className="create">Create</button>
                    </div>

                    <p className = "error">{this.state.error}</p>

                </div>
            </form>
        )
    }
}

export default momentForm;