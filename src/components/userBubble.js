
const UserBubble = (props) => {
    return (
        <>
            <div id="userBubble">
                <div className="title">
                  <h2>{props.title}</h2>
                </div>
                <p>{props.name}</p>
              </div>
        </>
    )
}

export default UserBubble;