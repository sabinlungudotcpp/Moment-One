import React from "react";
import Header from "../GenericComponents/Header";
import MomentForm from "./momentForm";
import JournalDis from "./Journal";
<<<<<<< HEAD

const Home = (props) => { // Home Component
=======
//The Dashboard page, where the user can create and see their moments
const Dashboard = () => { 
>>>>>>> e770bca86e23d75bfbe05fd35a5cebff203aa7ed
  return (
    <div className = "Page">
      <Header title="Your Moments Dashboard" grayTitle="Welcome username"/>

      <div className = "Content">
        <div className = "contentGrid">
          {/* displays the moment form input*/}
          <MomentForm />
          {/* displays the journal, total moments and answers */}
          <JournalDis/>
          <div>
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard; // Export home