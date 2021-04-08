
/**
 * @fileoverview: The chatBubble.js file returns a component for displaying a chat message bubble within the livechat page
 * @author:Ryan Spowart
 * @param {props}: chat - stores the input of the chat message
 * @component App() - Returns JSX
 * @requires: N/A
 */

const contact = (props) => { // Live Chat component
    return (
      <div className="chatBubble">
        {/*icon that will display an svg file handeled in the style document */}
        <div className = "icon" />
        <div className = "bubble">
          {/*content of the message */}
            <p>
                {props.chat}
            </p>
            
        </div>
      </div>
    )
  }
  export default contact; // Export home