import React from "react";
import FormCard from "./ForumCard";

const Perspectives = () => {

    return (
        <div className="yourforums">
            <div className="contentWrapper">
                <div className="formContainer">
                    <FormCard 
                    title="My new Road to Self-Awareness" 
                    category="PTSD" 
                    content="A very fine addition to the not over plentiful supply of good restaurants in this part of west London."
                    username="username"
                    level="3"
                    likes="560"
                    />
                    <FormCard />
                    <FormCard />
                    <FormCard />
                    <FormCard />
                    <FormCard />
                    {/*<div className="overlay"></div>*/}
                </div>
            </div>


        </div>
    )
    
}

export default Perspectives;