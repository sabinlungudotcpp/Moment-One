const contact = (props) => { // Live Chat component
    return (
      <div className="chatBubble">
        <div className = "icon" />
        <div className = "bubble">
            <p>
                {props.chat}
            </p>
            
        </div>
      </div>
    )
  }
  export default contact; // Export home