import React, {useState} from "react";
import axios from 'axios';
import moodGreat from "../../imageAssets/Mood Tracker/moodGreat.png";
import moodGood from "../../imageAssets/Mood Tracker/moodGood.png";
import moodMeh from "../../imageAssets/Mood Tracker/moodMeh.png";
import moodeBad from "../../imageAssets/Mood Tracker/moodBad.png";
import moodAwful from "../../imageAssets/Mood Tracker/moodAwful.png";

const MomentForm = () => {
    const [moment, setMoment] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8001/api/v1/momentone/posts', moment);
    }

        return (

            <form className="momentForm" onSubmit={onSubmit(e => e.target.value)}>
                <div className="momentForm_top-section">
                    <h2>Good afternoon, Username!</h2>
                    <h2>How are you feeling?</h2>
                    {/* Section of form for selecting the current feeling */}
                    <div className="feelingWrapper">

                        <label className="feelingSelect">
                            <input type="radio" name='feeling' value='Great' checked={moment === 'Great'} onChange={e => e.target.value} />
                            <img src = {moodGreat} alt="Great" className="feelingIcon" />
                            <p>Great</p>
                        </label>

                        <label className="feelingSelect">
                            <input type="radio" name='feeling' value='Good' checked={moment === 'Good'} onChange={e => this.change(e)} />
                            <img src={moodGood} alt="Good" className="feelingIcon" />
                            <p>Good</p>
                        </label>

                        <label className="feelingSelect">
                            <input type="radio" name='feeling' value='Meh' checked={moment === 'Meh'} onChange={e => this.change(e)} />
                            <img src={moodMeh} alt="Meh" className="feelingIcon" />
                            <p>Meh</p>
                        </label>

                        <label className="feelingSelect">
                            <input type="radio" name='feeling' value='Bad' checked={moment === 'Bad'} onChange={e => this.change(e)} />
                            <img src={moodeBad} alt="Bad" className="feelingIcon" />
                            <p>Bad</p>
                        </label>

                        <label className="feelingSelect">
                            <input type="radio" name='feeling' value='Awful' checked={moment=== 'Awful'} onChange={e => this.change(e)} />
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
                            <input type="radio" name='category' value='Depression' checked={this.state.moment.category === 'Depression'} onChange={e => this.change(e)} />
                            <p className="categoryLabel">Depression</p>
                        </label>

                        <label className="category_select">
                            <input type="radio" name='category' value='Weight Loss' checked={this.state.moment.category === 'Weight Loss'} onChange={e => this.change(e)} />
                            <p className="categoryLabel">Weight Loss</p>
                        </label>
                    </div>
                </div>
                {/* Section for inputing details of the users feelings into textboxes*/}
                <div className ="momentForm_bottom-section">

                    <p>What's on your mind today?</p>
                    <textarea className="mind" value={this.state.moment.title} name="title" onChange={e => this.change(e)} rows="12" cols="50" />

                    <p>Tell us more about how you feel...</p>
                    <textarea className="feelings" value={this.state.moment.description} name="description" onChange={e => this.change(e)} />

                    <div className="selfAware_wrapper">
                        <p>Do you feel self aware?</p>
                        <label class="switch">
                            <input type="checkbox" name="selfAware" checked={this.state.selfAware} onClick={e => this.awareToggle(e)} />
                            <span class="slider round"></span>
                        </label>
                    </div>
                    {/*Button for submitting the form*/}
                    <div className="btn_wrapper">
                        <button type = 'submit' className="create">Create</button>
                    </div>

                    
                </div>
            </form>

        )
    }

export default MomentForm;