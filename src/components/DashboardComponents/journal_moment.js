import React,{useState} from 'react';
import MomentOverlay from './momentOverlay';

const Moment = (props) => {

    const[isOpen,setIsOpen] = useState(false)
    const items = props.items;
    const listItems = items.map(item =>{
        return  <div className="moment" onClick = {() => setIsOpen(true)}>
                    <div className="icon"></div>
                    <div className="momentText">

                        <h2 className="momentTitle">{item.title}</h2>
                        <p rows="2">{item.description}</p>
                        <p className="dateText">{item.createdAt}</p>
                    </div>
                    <MomentOverlay open={isOpen} onClose={() => setIsOpen(false)}/>
                </div>
    })

    return(
        <div>{listItems}</div>
    )
    
}

export default Moment;