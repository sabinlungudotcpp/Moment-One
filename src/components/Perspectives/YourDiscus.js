import React,{useState} from "react";
import FormCard from "./ForumCard";
import axios from "axios";
const Perspectives = () => {
    const [items, setItems] = useState('');

    
    function getPosts() { // Getting top 10 posts

        axios.get('http://localhost:8001/api/v1/momentone/discussions ').then(res =>{
            console.log(res.data)
          setItems(
            res.data.data.posts,
          )
         
        })
      }

    return (
      
        <div className="yourforums">
          {getPosts()}
            <div className="contentWrapper">
                <div className="formContainer">
                    <FormCard 
                    title="My new Road to Self-Awareness" 
                    category="PTSD" 
                    content="A very fine addition to the not over plentiful supply of good restaurants in this part of west London."
                    username="username"
                    level="3"
                    likes="560"
                    />
                    {/* returns list of divs, when given array of retrieved items*/}
                    <FormCard items={items}/>

                    {/*<div className="overlay"></div>*/}
                </div>
            </div>


        </div>
    )
    
}

export default Perspectives;