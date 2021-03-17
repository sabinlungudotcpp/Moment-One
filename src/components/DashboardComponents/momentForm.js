import React ,{useState} from "react";
import axios from "axios";
import moodGreat from "../../imageAssets/Mood Tracker/moodGreat.png";
import moodGood from "../../imageAssets/Mood Tracker/moodGood.png";
import moodMeh from "../../imageAssets/Mood Tracker/moodMeh.png";
import moodBad from "../../imageAssets/Mood Tracker/moodBad.png";
import moodAwful from "../../imageAssets/Mood Tracker/moodAwful.png";

const MomentForm = () => {
    const [values, setValues] = useState({
        feeling: '',
        category: '',
        title: '',
        description: '',
        selfAware: false,
    });
    //attributes collected by the form
    
    const [error,setError] = useState('');
   
    const change = (e) => {
        console.log(values);
        setValues({
            [e.target.name]: e.target.value
        })
    }

    //updating the state after the self aware button is checked
    
    const awareToggle = (e) => {
        setValues({
            [e.target.name]: e.target.checked
        })
    }

    const validate = () => {
        
        if(values.feeling === ""){ 
            setError('Please say how you are feeling');
        }
        
        else if(values.category === ""){
            setError('Please enter a category');
        }
        
        else if(values.title === ""){
            setError('Please say whats on your mind');
        }
        
        else if(values.description === ""){
            setError('Please say how you feel');
        }else{
            setError('');
            console.log(values);
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        console.log(values);

        validate();

        /*
        if(this.state.error === ""){
            resState();   
        }*/

        await axios.post('http://localhost:8080/posts',{values});
        setValues('');

    }


    return (
        <form className="momentForm" onSubmit = {onSubmit} methed = "POST">
            <div className="momentForm_top-section">

                <h2>Good afternoon, Username!</h2>
                <h2>How are you feeling?</h2>
                <div className="feelingWrapper">

                    <label className="feelingSelect">
                        <input type="radio" name='feeling' value='Great' checked={values.feeling === 'Great'} onChange={ e => setValues({feeling: e.target.value})} />
                        <img src={moodGreat} alt="Great" className="feelingIcon" />
                        <p>Great</p>
                    </label>

                    <label className="feelingSelect">
                        <input type="radio" name='feeling' value='Good' checked={values.feeling === 'Good'} onChange={ e => setValues({feeling: e.target.value})} />
                        <img src={moodGood} alt="Good" className="feelingIcon" />
                        <p>Good</p>
                    </label>

                    <label className="feelingSelect">
                        <input type="radio" name='feeling' value='Meh' checked={values.feeling === 'Meh'} onChange={ e => setValues({feeling: e.target.value})} />
                        <img src={moodMeh} alt="Meh" className="feelingIcon" />
                        <p>Meh</p>
                    </label>

                    <label className="feelingSelect">
                        <input type="radio" name='feeling' value='Bad' checked={values.feeling === 'Bad'} onChange={ e => setValues({feeling: e.target.value})} />
                        <img src={moodBad} alt="Bad" className="feelingIcon" />
                        <p>Bad</p>
                    </label>

                    <label className="feelingSelect">
                        <input type="radio" name='feeling' value='Awful' checked={values.feeling === 'Awful'} onChange={ e => setValues({feeling: e.target.value})} />
                        <img src={moodAwful} alt="Awful" className="feelingIcon" />
                        <p>Awful</p>
                    </label>
                </div>
            </div>
            
            <div className="momentForm_center-section">
                <p> Add Category </p>
                <div className="category_wrap">

                    <label className="category_select">
                        <input type="radio" name='category' value='General' checked={values.category === 'General'} onChange={e => change(e)} />
                        <p className="categoryLabel">General</p>
                    </label>

                    <label className="category_select">
                        <input type="radio" name='category' value='Anxiety' checked={values.category === 'Anxiety'} onChange={e => change(e)}/>
                        <p className="categoryLabel">Anxiety</p>
                    </label>

                    <label className="category_select">
                        <input type="radio" name='category' value='PTSD'  checked={values.category === 'PTSD'} onChange={e => change(e)} />
                        <p className="categoryLabel">PTSD</p>
                    </label>

                    <label className="category_select">
                        <input type="radio" name='category' value='Depression' checked={values.category === 'Depression'} onChange={e => change(e)} />
                        <p className="categoryLabel">Depression</p>
                    </label>

                    <label className="category_select">
                        <input type="radio" name='category' value='Weight Loss' checked={values.category === 'Weight Loss'} onChange={e => change(e)} />
                        <p className="categoryLabel">Weight Loss</p>
                    </label>

                </div>
            </div>
            

            <div className="momentForm_bottom-section">
                <p>What's on your mind today?</p>
                <textarea className="mind" name="title"  value={values.title} onChange={e => change(e)} rows="12" cols="50" />

                <p>Tell us more about how you feel...</p>
                <textarea className="feelings" name="description"  value={values.description} onChange={e => change(e)} />

                <div className="selfAware_wrapper">
                    <p>Do you feel self aware?</p>
                    <label class="switch">
                        <input type="checkbox" name="selfAware"  checked={values.selfAware} onClick={e => awareToggle(e)} />
                        <span class="slider round"></span>
                    </label>
                </div>
                {/*Button for submitting the form*/}
                <div className="btn_wrapper">
                    <button className="create">Create</button>
                </div>
                <p id="error" className="error"></p> 
            </div>
        </form>

    )
    
}

export default MomentForm;