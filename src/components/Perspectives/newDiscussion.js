import React from "react";
import axios from 'axios';
    /**
 * @fileoverview: returns a form which allows entry of discussion and upload to database
 * @author: Ryan Spowart
 * @param: N/A
 * @component App() - Returns JSX
 * @requires: useState
 */

class NewDiscussion extends React.Component{
    //creating state
    constructor(props) { // Constructor for the moment form
        super(props);

        this.state = { // State for the moment form
            discussion: {
                title: '',
                content: '',
                date: Date.now(),
                category: '',
                likes: 0,
            },
            
            error:'',
        }
    }
    /**
     * @function: change updates the state using the item name it is called within and the value of the item
     */
    change = (e) => {
        this.setState({
            discussion:{
                ...this.state.discussion,
                [e.target.name]: e.target.value
            }
        })
    }

    /**
     * @function: onSubmit calls the validate function, checks if there are any errors, submits the data to the posts database file then resets the state to default
     */
    onSubmit = async (e) => {
        e.preventDefault();
        
        await axios.post('http://localhost:8001/api/v1/momentone/discussions', state.discussion);
    }

    /**
     * @function: reset resets the state of the component to default values
     */
    reset(){
        this.setState({
            discussion:{
                title:'',
                content:'',
                date:Date.now(),
                category:'',
                like:'0',
            }
        })
    }

    /**
     * @function: The validate function is used to validate the form entry fields. If they are left empty, an error message is displayed
     */
    validate(){
        if(this.state.title ===''){
            this.setState({error:"Please enter a title"})
        }else if(this.state.content===''){
            this.setState({error:"please enter the content"})
        }else if(this.state.category===''){
            this.setState({error:"please enter a category"})
        }else{
            this.setState({error:''})
        }
    }

    render(){ //returns jsx component
        return (
            <form className="newDiscussion" onSubmit={e => this.onSubmit(e)}>
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
                    <textarea className="titleInput" name="title" rows="1" cols="50" placeholder="Title..." onChange={e => this.change(e)}/>
                    <textarea className="textInput" name="content" rows="5" cols="50" placeholder="Content..." onChange={e => this.change(e)}/>
                    </div>
                    {/* category input */}
                    <div className="category_wrap">
    
                    <label className="category_select">
                        <input type="radio" name='category' value='Anxiety' onChange={e => this.change(e)} />
                        <p className="categoryLabel">ANXIETY</p>
                    </label>
    
                    <label className="category_select">
                        <input type="radio" name='category' value='Burnout' onChange={e => this.change(e)}/>
                        <p className="categoryLabel">BURNOUT</p>
                    </label>
    
                    <label className="category_select">
                        <input type="radio" name='category' value='PTSD' onChange={e => this.change(e)}/>
                        <p className="categoryLabel">PTSD</p>
                    </label>
    
                    <label className="category_select">
                        <input type="radio" name='category' value='Depression' onChange={e => this.change(e)}/>
                        <p className="categoryLabel">DEPRESSION</p>
                    </label>
    
                    <label className="category_select">
                        <input type="radio" name='category' value='Weight Loss' onChange={e => this.change(e)}/>
                        <p className="categoryLabel">WEIGHT LOSS</p>
                    </label>

                    <label className="category_select">
                        <input type="radio" name='category' value='Self Care' onChange={e => this.change(e)}/>
                        <p className="categoryLabel">SELF CARE</p>
                    </label>

                    <label className="category_select">
                        <input type="radio" name='category' value='Eating disorder' onChange={e => this.change(e)}/>
                        <p className="categoryLabel">EATING DISORDER</p>
                    </label>
                </div>
                {/* submit button */}
                <button className="submit">Ask the Community {this.state.error}</button>
            </form>
        )
    }
}

export default NewDiscussion;