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
        error:'',
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

    validate=()=> {
        
        if(this.state.currentfeeling === ""){
            this.setState({error:"Please say how you are feeling"});
            console.log(this.state);
        }else if(this.state.category === ""){
            this.setState({error:"Please enter a category"});
            console.log(this.state);
        }else if(this.state.onYourMind === ""){
            this.setState({error:"Please say whats on your mind"});
            console.log(this.state);
        }else if(this.state.howYouFeel === ""){
            this.setState({error:"Please say how you feel"});
            console.log(this.state);
        }else{
            this.setState({error:""});
            console.log(this.state);
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

            console.log(this.state);

            this.validate();

            if(this.state.error === ""){

                const payload = {
                    title: this.state.onYourMind,
                    feeling: this.state.howYouFeel,
                    category: this.state.category,
                    selfAware: this.state.selfAware,
                    description: this.state.howYouFeel,
                }
                
                axios({
                    url:'http://localhost:8001/api/v1/momentone/posts',
                    method: 'Post',
                    data:payload
                })
                .then(() => {
                    alert('connected')
                })
                .catch(() => {
                    alert('not connect')
                })

                this.resState();
                
            }
    }



    render() {

        return (
            <form className="momentForm">
                <div className="momentForm_top-section">

                    <h2>Good afternoon, Username!</h2>
                    <h2>How are you feeling?</h2>
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
                    <p id="error" className="error">{this.state.error}</p>
                </div>
            </form>

        )
    }
}

export default momentForm;