import React from "react";
import JournalMoment from "./journal_moment";
import totalMoments from "../../imageAssets/Icons/General/totalMoments.png";
import answersRecieved from "../../imageAssets/Icons/General/answersRecieved.png";
import graph from "../../imageAssets/Icons/General/graph.png";
import axios from "axios";

    /**
 * @fileoverview: returns a component that contains a list of journal moments
 * @author: Ryan Spowart
 * @param {props}: no props are passed into this class
 * @component App() - Returns JSX
 * @requires: react axios
 */
class momentForm extends React.Component {
  constructor(props) {

    super(props);

    this.state = { 
      items:[],
      currentItem:{
        title:'Lockdown woes is the title',
        content:'Oh boy is lockdown boring, this would be the content ',
        date: new Date().toLocaleString()
      }
    }
  }
      /**
     * @function: Component Did mount calls the getPosts function when the component is first mounted
     */
  componentDidMount() {
    //gets the posts on load
    this.getPosts();
  }

      /**
     * @function: getPosts gets data from the database and sets the data retrieved into the component state
     */

  getPosts() { // Getting moments from database

    axios.get('http://localhost:8001/api/v1/momentone/posts').then(res =>{

      this.setState({
        items:res.data.data.posts,  //adding all the items into an array
        momentNo:res.data.data.numberOfPosts, //getting the numebr of posts
        //---answers recieved will be inserted here --
      })
     
    })
  }

      /**
     * @function: addItem adds a new item to the list of moments to be displayed
     */

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    const newItems = [...this.state.items,newItem];

    this.setState({
      items:newItems,
      currentItem:{
        title:'',
        content:'',
        date:'',
      }

      });
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