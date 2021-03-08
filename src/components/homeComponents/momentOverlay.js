import react from 'react'
import ReactDom from 'react-dom'
import tabRight from "../../imageAssets/Icons/General/tabRight.png";
import tabLeft from "../../imageAssets/Icons/General/tabLeft.png";
export default function Model({open,onClose}){
    if(!open) return null
    return ReactDom.createPortal(
        <>
        <div className="background" ></div>
        <div className="momentOverlay" onClick={onClose}>
            <div className="tab">
                <img className="tabIcon" src={tabLeft}/>
            </div>
            <div className="momentContainer">
                Moment Info
            </div>
            <div className="tab">
            <img className="tabIcon" src={tabRight}/>
            </div>
        </div>
        </>,
        document.getElementById('portal')

    )
}