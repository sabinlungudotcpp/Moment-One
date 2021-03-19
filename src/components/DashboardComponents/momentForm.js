import React, {useState} from "react";
import axios from 'axios';
import moodGreat from "../../imageAssets/Mood Tracker/moodGreat.png";
import moodGood from "../../imageAssets/Mood Tracker/moodGood.png";
import moodMeh from "../../imageAssets/Mood Tracker/moodMeh.png";
import moodeBad from "../../imageAssets/Mood Tracker/moodBad.png";
import moodAwful from "../../imageAssets/Mood Tracker/moodAwful.png";

const MomentForm = () => {
    const {feeling, title, description, category, selfAware} = useState('');
    const [moment, setMoment] = useState({feeling, title, description, category, selfAware});

    const onSubmit = async (e) => { // When submitting the form
        e.preventDefault();
        await axios.post('http://localhost:8001/api/v1/momentone/posts', moment);
    }

        return (

            <form className = "momentForm" onSubmit= {onSubmit}>
                <div className = "momentForm_top-section">
                    <h2>Good afternoon, Username!</h2>
                    <h2>How are you feeling?</h2>

                    {/* Section of form for selecting the current feeling */}
                    <div className="feelingWrapper">

                        <label className="feelingSelect">
                            <input type="radio" name='feeling' value ='Great' onChange = {e => e.target.value} />
                            <img src = {moodGreat} alt="Great" className="feelingIcon" />
                            <p>Great</p>
                        </label>

                        <label className="feelingSelect">
                            <input type="radio" name='feeling' value='Good' onChange={e => e.target.value} />
                            <img src = {moodGood} alt="Good" className="feelingIcon" />
                            <p>Good</p>
                        </label>

                        <label className="feelingSelect">
                            <input type="radio" name='feeling' value='Meh' onChange = {e => e.target.value} />
                            <img src={moodMeh} alt="Meh" className="feelingIcon" />
                            <p>Meh</p>
                        </label>

                        <label className="feelingSelect">
                            <input type="radio" name='feeling' value='Bad' onChange = {e => e.target.value} />
                            <img src={moodeBad} alt="Bad" className="feelingIcon" />
                            <p>Bad</p>
                        </label>

                        <label className="feelingSelect">
                            <input type="radio" name='feeling' value='Awful' onChange={e => e.target.value} />
                            <img src={moodAwful} alt="Awful" className="feelingIcon" />
                            <p>Awful</p>
                        </label>
                    </div>
                </div>

                {/* Section of form for selecting category of the moment*/}
                <div className="momentForm_center-section">
                    <p> Add Category </p>
                    <div className="category_wrap">
                        <label className="category_select">
                            <input type="radio" name='category' value='General' onChange ={e => e.target.value} />
                            <p className="categoryLabel">General</p>
                        </label>

                        <label className="category_select">
                            <input type="radio" name='category' value='Anxiety' onChange={e => e.target.value} />
                            <p className="categoryLabel">Anxiety</p>
                        </label>

                        <label className="category_select">
                            <input type="radio" name='category' value='PTSD' onChange = {e => e.target.value} />
                            <p className="categoryLabel">PTSD</p>
                        </label>

                        <label className="category_select">
                            <input type="radio" name='category' value='Depression' onChange ={e => e.target.value} />
                            <p className="categoryLabel">Depression</p>
                        </label>

                        <label className="category_select">
                            <input type="radio" name='category' value='Weight Loss' onChange = {e => e.target.value} />
                            <p className="categoryLabel">Weight Loss</p>
                        </label>
                    </div>
                </div>

                <div className ="momentForm_bottom-section">

                    <p>What's on your mind today?</p>
                    <textarea className="mind" value = {moment.title} name="title" onChange = {e => e.target.value} rows="12" cols="50" />

                    <p>Tell us more about how you feel...</p>
                    <textarea className="feelings" value = {moment.description} name = "description" onChange={e => e.target.value} />

                    <div className="selfAware_wrapper">
                        <p>Do you feel self aware?</p>
                        <label class="switch">
                            <input type="checkbox" name="selfAware" onClick ={e => e.target.value} />
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