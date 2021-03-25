import React from "react";
import Header from "../GenericComponents/Header";
import ContactCard from "./contectCard";
import axios from "axios"
class Community extends React.Component {
  constructor(props) { // Constructor for the moment form
    super(props);
    
    this.state = { // State for the moment form
      therapists:[],
      users:[],
    }
    this.getTherapists();
}
  getTherapists =() =>{
    axios.get('http://localhost:8001/api/v1/momentone/therapist').then(res =>{
      
      this.setState({
        therapists:res.data.allUsers,
      })
      
      console.log(this.state.items);
    })
  }

  getUsers =() =>{
    axios.get('http://localhost:8001/api/v1/momentone/users').then(res =>{
      
      this.setState({
        users:res.data.allUsers,
      })
      
      console.log(this.state.items);
    })
  }

render() {
    return (

      <div className = "Page">
        
        <Header title="Community"/>

        <div className = "content">
          <div className ="therapistSection">
            <h2 className = "subtitle">Therapists</h2>
            <div className = "cardContainer">
              <ContactCard items={this.state.therapists}/>
            </div>
          </div>
          <div className ="indevidualSection">
            <h2 className = "subtitle">Individuals</h2>
            <div className = "cardContainer">
              <ContactCard items={this.state.users}/>
            </div>
          </div>

        </div>
      </div>

    )
  }
}

export default Community; // Export the community module