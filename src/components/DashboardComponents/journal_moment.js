import React,{useState} from 'react';
import MomentOverlay from './momentOverlay';
/**
 * @fileoverview: Returns a list of divs for dispalying a users moments
 * @author: Ryan Spowart
 * @param {props}: items - array of moment items to be dispalyed
 * @component App() - Returns JSX
 * @requires: npm install react
 */

const Moment = (props) => {

    const[isOpen,setIsOpen] = useState(false)
    const items = props.items;
    const listItems = items.map(item =>{
        return  <div className="moment" onClick = {() => setIsOpen(true)}>
                    <div className="icon"></div>
                    <div className="momentText">

                        <h2 className="momentTitle">{item.title}</h2>
                        <p rows="2">{item.description}</p>
                        <p className="dateText">{item.createdAt.substring(0, 10)}</p>
                    </div>
                    <MomentOverlay open={isOpen} onClose={() => setIsOpen(false)}/>
                </div>
    })

    return(
        <div>{listItems}</div>
    )
    
}

export default Moment;