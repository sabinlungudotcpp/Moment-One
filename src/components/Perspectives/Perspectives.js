import React from "react";
import Header from "../GenericComponents/Header";
import YourDiscussions from "./YourDiscus";
import MoreDiscussions from "./moreDiscussions";
import NewDiscussion from "./newDiscussion";
    /**
 * @fileoverview: Perspectives.js returns the perspectives page that shows the users own discussions and the most popular discussions by likes
 * @author: Ryan Spowart
 * @param: N/A
 * @component App() - Returns JSX
 * @requires: npm install react
 */
const Perspectives = () => {
  return (
    <div className = "Page">
      {/*importing the header component*/}
      <Header title="Forum Discussions" blueTitle="Your Participants " grayTitle="&nbsp;| Your Questions"/>
      <div className = "content">
        <div className="pageScroll">
          <YourDiscussions/> {/* users posted discussions */}
          <div className="discussionWrap">
            <MoreDiscussions />     {/* current top discussions */}
            <NewDiscussion />   {/* new disucssion form */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perspectives; // Export the Self Awareness module