import react, {useState} from 'react';
import ReactDom from 'react-dom';
import tabRight from "../../imageAssets/Icons/General/tabRight.png";
import tabLeft from "../../imageAssets/Icons/General/tabLeft.png";
import moodGreat from "../../imageAssets/Mood Tracker/moodGreat.png";
import moodGood from "../../imageAssets/Mood Tracker/moodGood.png";
import moodMeh from "../../imageAssets/Mood Tracker/moodMeh.png";
import moodBad from "../../imageAssets/Mood Tracker/moodBad.png";
import moodAwful from "../../imageAssets/Mood Tracker/moodAwful.png";

export default function Model(props){
    const[state, setState] = useState({
        feeling:"great",
        title:"Title",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        date:"9th march",
        username:"@username",
        userLevel:"3",
    });
    //returns nothing if the open value is false
    if(!props.open) return null

    //converts the feeling stored in state to a usable image
    function showFeel($feeling){
        if($feeling ==="meh"){
            return moodMeh
        }else if($feeling ==="great"){
            return moodGreat
        }else if($feeling ==="good"){
            return moodGood
        }else if($feeling ==="bad"){
            return moodBad
        }else if($feeling ==="awful"){
            return moodAwful
        }else{
            console.log("Feeling not found");
        }
    }
    function returnMoment($direction){

    }
    //creating a portal to a seperate div to root
    return ReactDom.createPortal(
        <>
        <div className="background" ></div>
        <div className="momentOverlay">
            <button className="tab">
                <img className="tabIcon" src={tabLeft}/>
            </button>

            <div className="momentContainer">
                <div className="momentContent">
                    <img src={showFeel(state.feeling)} className="feelingImg"/>
                    <h1 className="momentTitle">{state.title}</h1>
                    <div className="devider"></div>
                    <p className="momentDesc">{state.desc}</p>
                </div>
                <div className = "rightSection">
                    <div className="user">
                        <div className="profileImg"></div>
                        <h2 className="username">{state.username}</h2>
                        <div className="userLevel">
                            <h3>{state.userLevel}</h3>
                            <div className="crownIcon"/>
                            </div>
                    </div>
                    <div className="comments">

                        <form className="reply">
                            
                        </form>
                    </div>
                </div>



            </div>

            <div className="tab"onClick={returnMoment(+1)}>
                <img className="tabIcon" src={tabRight}/>
                
            </div>
            <button onClick={() => {props.onClose()}}>close</button>
            
        </div>
        </>,
        //inseting the above code into the below div
        document.getElementById('portal')

    )
}