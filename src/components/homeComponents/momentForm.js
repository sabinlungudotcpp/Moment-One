import React from "react";
import axios from 'axios';
import moodGreat from "../../imageAssets/Mood Tracker/moodGreat.png";
import moodGood from "../../imageAssets/Mood Tracker/moodGood.png";
import moodMeh from "../../imageAssets/Mood Tracker/moodMeh.png";
import moodeBad from "../../imageAssets/Mood Tracker/moodBad.png";
import moodAwful from "../../imageAssets/Mood Tracker/moodAwful.png";

class momentForm extends React.Component {
    //attributes collected by the form
    state = {
        currentfeeling: '',
        category: '',
        onYourMind: '',
        howYouFeel: '',
        selfAware: false,
    }
    //reseting the form after it has been submitted so no page reset is needed
    resState() {
        this.setState({
            currentfeeling: '',
            category: '',
            onYourMind: '',
            howYouFeel: '',
            selfAware: false,
        })
    }
    //updating the state whenever something is changed
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    //updating the state after the self aware button is checked
    awareToggle = (e) => {
        this.setState({
            [e.target.name]: e.target.checked
        })
    }
    //loging the results, then sending the data to the database via axios
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

        axios.post('http://localhost:8001/api/v1/momentone/posts')
            .then(() => {
                alert('connected')
            })
            .catch(() => {
                alert('not connect')
            })


        this.resState();
    }

    validate() {

        return false;
    }
    render() {
        return (
            <form className="momentForm">
                <div className="momentForm_top-section">
                    <h2>Good afternoon, Username!</h2>
                    <h2>How are you feeling?</h2>
                    {/* Section of form for selecting the current feeling */}
                    <div className="feelingWrapper">

                        <label className="feelingSelect">
                            <input type="radio" name='currentfeeling' value='Great' checked={this.state.currentfeeling === 'Great'} onChange={e => this.change(e)} />
                            <img src={moodGreat} alt="Great" className="feelingIcon" />
                            <p>Great</p>
                        </label>

                        <label className="feelingSelect">
                            <input type="radio" name='currentfeeling' value='Good' checked={this.state.currentfeeling === 'Good'} onChange={e => this.change(e)} />
                            <img src={moodGood} alt="Good" className="feelingIcon" />
                            <p>Good</p>
                        </label>

                        <label className="feelingSelect">
                            <input type="radio" name='currentfeeling' value='Meh' checked={this.state.currentfeeling === 'Meh'} onChange={e => this.change(e)} />
                            <img src={moodMeh} alt="Meh" className="feelingIcon" />
                            <p>Meh</p>
                        </label>

                        <label className="feelingSelect">
                            <input type="radio" name='currentfeeling' value='Bad' checked={this.state.currentfeeling === 'Bad'} onChange={e => this.change(e)} />
                            <img src={moodeBad} alt="Bad" className="feelingIcon" />
                            <p>Bad</p>
                        </label>

                        <label className="feelingSelect">
                            <input type="radio" name='currentfeeling' value='Awful' checked={this.state.currentfeeling === 'Awful'} onChange={e => this.change(e)} />
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
                            <input type="radio" name='category' value='General' checked={this.state.category === 'General'} onChange={e => this.change(e)} />
                            <p className="categoryLabel">General</p>
                        </label>

                        <label className="category_select">
                            <input type="radio" name='category' value='Anxiety' checked={this.state.category === 'Anxiety'} onChange={e => this.change(e)} />
                            <p className="categoryLabel">Anxiety</p>
                        </label>

                        <label className="category_select">
                            <input type="radio" name='category' value='PTSD' checked={this.state.category === 'PTSD'} onChange={e => this.change(e)} />
                            <p className="categoryLabel">PTSD</p>
                        </label>

                        <label className="category_select">
                            <input type="radio" name='category' value='Depression' checked={this.state.category === 'Depression'} onChange={e => this.change(e)} />
                            <p className="categoryLabel">Depression</p>
                        </label>

                        <label className="category_select">
                            <input type="radio" name='category' value='Weight Loss' checked={this.state.category === 'Weight Loss'} onChange={e => this.change(e)} />
                            <p className="categoryLabel">Weight Loss</p>
                        </label>
                    </div>
                </div>
                {/* Section for inputing details of the users feelings into textboxes*/}
                <div className="momentForm_bottom-section">
                    <p>What's on your mind today?</p>
                    <textarea className="mind" value={this.state.onYourMind} name="onYourMind" onChange={e => this.change(e)} rows="12" cols="50" />

                    <p>Tell us more about how you feel...</p>
                    <textarea className="feelings" value={this.state.howYouFeel} name="howYouFeel" onChange={e => this.change(e)} />

                    <div className="selfAware_wrapper">
                        <p>Do you feel self aware?</p>
                        <label class="switch">
                            <input type="checkbox" name="selfAware" checked={this.state.selfAware} onClick={e => this.awareToggle(e)} />
                            <span class="slider round"></span>
                        </label>
                    </div>
                    {/*Button for submitting the form*/}
                    <div className="btn_wrapper">
                        <button onClick={e => this.onSubmit(e)} className="create">Create</button>
                    </div>
                </div>
            </form>

        )
    }
}

export default momentForm;