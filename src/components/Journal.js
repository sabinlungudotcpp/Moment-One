import React from "react";
import axios from 'axios';
import JournalMoment from "./journal_moment";

class momentForm extends React.Component{

    state = {
        Category: '',
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
            <div className="journal">
              <h2>Your Moments </h2>

              <form className="journal_form">
                <div className="journal_underline"></div>
                <button class="journal_categories">Categories</button>
              </form>
              
            <div className = "momentList">

            {/*Temporary filler until axios is implemented */}
            <JournalMoment title="Lockdown woes is the title" content="Oh boy is lockdown boring, this would be the content" date="March 21,2021" />
            <JournalMoment title="Lockdown woes is the title" content="Oh boy is lockdown boring, this would be the content" date="March 21,2021" />
            <JournalMoment title="Lockdown woes is the title" content="Oh boy is lockdown boring, this would be the content" date="March 21,2021" />
            <JournalMoment title="Lockdown woes is the title" content="Oh boy is lockdown boring, this would be the content" date="March 21,2021" />
            <JournalMoment title="Lockdown woes is the title" content="Oh boy is lockdown boring, this would be the content" date="March 21,2021" />
            </div>
          </div>
          )
    }
}

export default momentForm;