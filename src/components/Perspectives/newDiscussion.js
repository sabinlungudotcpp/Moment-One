import React,{useState} from "react";
import axios from 'axios';
//form for creating a new discussion, adding it to the database
const NewDiscussion = () => {
    //creating state
    const [state, setState] = useState({
        discussion:{
            title:'',
            content:'',
            date:Date.now(),
            category:'',
            likes:'0',
        }
    });

    //updating the state whenever something is changed
    const change = (e) => {
        setState({
            discussion:{
                ...state.discussion,
                [e.target.name]: e.target.value
            }
        })
    }
    //submitting to database
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(state.discussion)
        await axios.post('http://localhost:8001/api/v1/momentone/discussions',state.discussion);
    }

    return (
        <form className="newDiscussion" onSubmit={e => onSubmit(e)}>
            <div className="userWrapper">
                
                <div className = "icon"></div>
                <div className="textWrap">{/* user datails */}
                    <h2 className="username">@username</h2>
                    <h3 className = "level">level 2</h3>
                </div>
            </div>

            <div className="formWrapper">
                {/* title */}
                <h2>🔥 New Discussion</h2>
                <p>Anything on your mind? Ask the community and expand your self-awarness knowledge.</p>
                {/* title and description input */}
                <textarea className="titleInput" name="title" rows="1" cols="50" placeholder="Title..." onChange={e => change(e)}/>
                <textarea className="textInput" name="content" rows="5" cols="50" placeholder="Content..." onChange={e => change(e)}/>
                </div>
                {/* category input */}
                <div className="category_wrap">

                <label className="category_select">
                    <input type="radio" name='category' value='Anxiety' onChange={e => change(e)} />
                    <p className="categoryLabel">ANXIETY</p>
                </label>

                <label className="category_select">
                    <input type="radio" name='category' value='Burnout' onChange={e => change(e)}/>
                    <p className="categoryLabel">BURNOUT</p>
                </label>

                <label className="category_select">
                    <input type="radio" name='category' value='PTSD' onChange={e => change(e)}/>
                    <p className="categoryLabel">PTSD</p>
                </label>

                <label className="category_select">
                    <input type="radio" name='category' value='Depression' onChange={e => change(e)}/>
                    <p className="categoryLabel">DEPRESSION</p>
                </label>

                <label className="category_select">
                    <input type="radio" name='category' value='Weight Loss' onChange={e => change(e)}/>
                    <p className="categoryLabel">WEIGHT LOSS</p>
                </label>
                <label className="category_select">
                    <input type="radio" name='category' value='Self Care' onChange={e => change(e)}/>
                    <p className="categoryLabel">SELF CARE</p>
                </label>
                <label className="category_select">
                    <input type="radio" name='category' value='Eating disorder' onChange={e => change(e)}/>
                    <p className="categoryLabel">EATING DISORDER</p>
                </label>

            </div>
            {/* submit button */}
            <button className="submit">Ask the Community</button>

        </form>
    )
    
}

export default NewDiscussion;