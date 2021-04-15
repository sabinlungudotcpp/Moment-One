import React from "react";
import Header from "../GenericComponents/Header";
import ContactCard from "./contectCard";
import axios from "axios"

/**
 * @fileoverview: The comunity.js component file is resposnable for rendering the community page to the user, allowing the user to see therapists and other users
 * @author: Ryan Spowart
 * @param {props}: The props parameter is used to store properties from other components that are rendered on this screen
 * @component App() - Returns JSX
 * @requires: npm install axios
 */


class Community extends React.Component {
  constructor(props) { // Constructor for the moment form
    super(props);
    
    this.state = { // State for the moment form
      therapists:[],
      users:[],
    }
    this.getTherapists();
    this.getUsers();
}
  getTherapists =() =>{
    axios.get('http://localhost:8001/api/v1/momentone/therapist').then(res =>{
      this.setState({
        therapists:res.data.allTherapists,
      })
    })
  }

  getUsers =() =>{
    axios.get('http://localhost:8001/api/v1/momentone/users').then(res =>{
      console.log(res);
      this.setState({
        users:res.data.allUsers,
      })
    })
  }

render() {
    return (

      <div className = "Page">
        
        <Header title="Community"/>

        <div className = "content">
          <div className ="therapistSection">
            <h2 className = "subtitle">Therapists</h2>
              <ContactCard items={this.state.therapists}/>
          </div>
          <div className ="indevidualSection">
            <h2 className = "subtitle">Individuals</h2>
              <ContactCard items={this.state.users}/>
          </div>

        </div>
      </div>

    )
  }
}

export default Community; // Export the community module