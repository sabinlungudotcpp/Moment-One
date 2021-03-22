import React,{useState} from "react";
import FormCard from "./ForumCard";
import axios from "axios";
const Perspectives = () => {
    const [items, setItems] = useState('');

    
    function getPosts() { // Getting top 10 posts

       /* axios.get('http://localhost:8001/api/v1/momentone/discussions ').then(res =>{
            console.log(res.data)
          setItems(
            res.data.data.posts,
          )
         
        })*/
      }

    return (
      
        <div className="yourforums">
          {getPosts()}
            <div className="contentWrapper">
                <div className="formContainer">
                    {/* returns list of divs, when given array of retrieved items*/}
                    <FormCard items={items}/>

                    {/*<div className="overlay"></div>*/}
                </div>
            </div>


        </div>
    )
    
}

export default Perspectives;