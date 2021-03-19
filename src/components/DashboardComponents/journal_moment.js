import React,{useState , Component} from 'react';
import MomentOverlay from './momentOverlay';

export default function Moment(props) {

    const[isOpen,setIsOpen] = useState(false)
    const items = props.items;
    const listItems = items.map(item =>{
        return  <div className="moment" onClick = {() => setIsOpen(true)}>
                    <div className="icon"></div>
                    <div className="momentText">

                        <h2 className="momentTitle">{item.title}</h2>
                        <p>{item.description}</p>
                        <p className="dateText">{item.createdAt}</p>
                    </div>
                    <MomentOverlay open={isOpen} onClose={() => setIsOpen(false)}/>
                </div>
    })

    //this doesnt seem to be re rendering the portal when the state changes for some reason
    return(
        <div>{listItems}</div>
    
    )
    
}
