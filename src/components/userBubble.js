
export default function Model(props){
    //this will eventially be clickable to a users
    return(
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