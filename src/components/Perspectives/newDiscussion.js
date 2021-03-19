import React from "react";

const newDiscussion = () => {

    return (
        <form className="newDiscussion">
            <div className="userWrapper">
                
                <div className = "icon"></div>
                <div className="textWrap">
                    <h2 className="username">@username</h2>
                    <h3 className = "level">level 2</h3>
                </div>
            </div>

            <div className="formWrapper">
                <h2>🔥 New Discussion</h2>
                <p>Anything on your mind? Ask the community and expand your self-awarness knowledge.</p>
                <textarea className="textInput" name="dicussionContent" rows="5" cols="50" />
                </div>
                <div className="category_wrap">

                <label className="category_select">
                    <input type="radio" name='category' value='Anxiety'/>
                    <p className="categoryLabel">ANXIETY</p>
                </label>

                <label className="category_select">
                    <input type="radio" name='category' value='Burnout'/>
                    <p className="categoryLabel">BURNOUT</p>
                </label>

                <label className="category_select">
                    <input type="radio" name='category' value='PTSD'/>
                    <p className="categoryLabel">PTSD</p>
                </label>

                <label className="category_select">
                    <input type="radio" name='category' value='Depression'/>
                    <p className="categoryLabel">DEPRESSION</p>
                </label>

                <label className="category_select">
                    <input type="radio" name='category' value='Weight Loss'/>
                    <p className="categoryLabel">WEIGHT LOSS</p>
                </label>
                <label className="category_select">
                    <input type="radio" name='category' value='Self Care'/>
                    <p className="categoryLabel">SELF CARE</p>
                </label>
                <label className="category_select">
                    <input type="radio" name='category' value='Eating disorder'/>
                    <p className="categoryLabel">EATING DISORDER</p>
                </label>

            </div>

            <button className="submit">Ask the Community</button>

        </form>
    )
    
}

export default newDiscussion;