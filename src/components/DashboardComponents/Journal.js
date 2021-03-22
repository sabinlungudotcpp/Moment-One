import React from "react";
import JournalMoment from "./journal_moment";
import totalMoments from "../../imageAssets/Icons/General/totalMoments.png";
import answersRecieved from "../../imageAssets/Icons/General/answersRecieved.png";
import graph from "../../imageAssets/Icons/General/graph.png";
import axios from "axios";

class momentForm extends React.Component {
  constructor(props) {

    super(props);

    this.state ={
      items:[], //journam moments to be displayed
      currentItem:{ //current item being added
        title:'Lockdown woes is the title',
        content:'Oh boy is lockdown boring, this would be the content ',
        date: new Date().toLocaleString()
      }
    }

    //gets the posts on load
    this.getPosts();
  }

  getPosts() { // Getting moments from database

    axios.get('http://localhost:8001/api/v1/momentone/posts').then(res =>{

      this.setState({
        items:res.data.data.posts,  //adding all the items into an array
        momentNo:res.data.data.numberOfPosts, //getting the numebr of posts
        //---answers recieved will be inserted here --
      })
     
    })
  }

    render() {
        return (
          <div>
            <div className="momentsAnswersWrap">
              {/* displays total moments to the user */}
              <div className="totalMoments">
                <div className="imgBack">
                  <img src={totalMoments} alt="img"/>
                </div>
                <div className="textWrap">
                  <h1 className="number">{this.state.momentNo}</h1>
                  <p className="subTitle">Total Moments</p>
                  <p className="percent"><img src={graph} alt="img"/> 4% (30days)</p>
                </div>
              </div>
              {/* displays answers recieved */}
              <div className="answersRecieved">
                <div className="imgBack">
                  <img src={answersRecieved} alt="img"/>
                  </div>
                  <div className="textWrap">
                  <h1 className="number">15</h1>
                  <p className="subTitle">Answers Recieved</p>
                  <p className="percent"><img src={graph} alt="img"/> 4% (30days)</p>

                </div>
              </div>
            </div>

            <div className="journal">

            <div className = "momentList">
            {/* Generates the list of moments, returning them  to this div */}
            <JournalMoment items={this.state.items} />

              </div>
           </div>
          </div>
          )
    }
}

export default momentForm;