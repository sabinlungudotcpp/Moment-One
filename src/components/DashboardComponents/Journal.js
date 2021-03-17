import React from "react";
import JournalMoment from "./journal_moment";
import totalMoments from "../../imageAssets/Icons/General/totalMoments.png";
import answersRecieved from "../../imageAssets/Icons/General/answersRecieved.png";
import graph from "../../imageAssets/Icons/General/graph.png";
class momentForm extends React.Component{

    state = {
        Category: '',
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        return (
          <div>
            <div className="momentsAnswersWrap">
              <div className="totalMoments">
                <div className="imgBack">
                  <img src={totalMoments}/>
                </div>
                <div className="textWrap">
                  <h1 className="number">15</h1>
                  <p className="subTitle">Total Moments</p>
                  <p className="percent"><img src={graph}/> 4% (30days)</p>
                </div>

                <h2></h2>
              </div>
              <div className="answersRecieved">
                <div className="imgBack">
                  <img src={answersRecieved}/>
                  </div>
                  <div className="textWrap">
                  <h1 className="number">15</h1>
                  <p className="subTitle">Answers Recieved</p>
                  <p className="percent"><img src={graph}/> 4% (30days)</p>
                </div>
              </div>
            </div>

            <div className="journal">
            <div className = "momentList">
            {/*Temporary filler until axios is implemented */}
            <JournalMoment title="Lockdown woes is the title" content="Oh boy is lockdown boring, this would be the content" date="March 21,2021" />
            <JournalMoment title="Lockdown woes is the title" content="Oh boy is lockdown boring, this would be the content" date="March 21,2021" />
            <JournalMoment title="Lockdown woes is the title" content="Oh boy is lockdown boring, this would be the content" date="March 21,2021" />
            <JournalMoment title="Lockdown woes is the title" content="Oh boy is lockdown boring, this would be the content" date="March 21,2021" />
            <JournalMoment title="Lockdown woes is the title" content="Oh boy is lockdown boring, this would be the content" date="March 21,2021" />
            
            </div>
          </div>
          </div>
          )
    }
}

export default momentForm;