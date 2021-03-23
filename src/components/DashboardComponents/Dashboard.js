import React from "react";
import Header from "../GenericComponents/Header";
import MomentForm from "./momentForm";
import JournalDis from "./Journal";

/**
 * @fileoverview: The Dashboard.js component file is responsible for rendering the dashboard on the website which returns a form where users can post how they are feeling
 * @author: Sabin Constantin Lungu, Ryan Spowart
 * @param {props}: The props parameter is used to store properties from other components that are rendered on this screen
 * @component App() - Returns JSX
 * @requires: npm install react-router-dom
 */

const Dashboard = (props) => { // Home Component
  return (
    
    <div className = "Page">
      <Header title="Your Moments Dashboard" grayTitle = "Welcome username"/>

      <div className = "Content">
        <div className = "contentGrid">
<<<<<<< HEAD
            <MomentForm />
            <JournalDis/>
=======
          {/* displays the moment form input*/}
          <MomentForm/>
          {/* displays the journal, total moments and answers */}
          <JournalDis/>

>>>>>>> df6e252241f1d7ce896f184ec3844077fde98137
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard; // Export home