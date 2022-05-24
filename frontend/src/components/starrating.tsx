import styled from "styled-components"
import { useState} from 'react';
import { useLocation } from "react-router-dom";
import axios from "axios";


const StarRating = ({sendRating, sendId}:any)=>{
 
 
  const test = sendRating[sendRating.length-1]
  console.log("THIS IS THE url YOU'RE LOOKING FOR", process.env.REACT_APP_API_BASE_URL)
    const location = useLocation()
    const [rating, setRating] = useState(test);
    const [hover, setHover] = useState(0);
    // const [isPending, setIsPending] = useState<boolean>(false);
    console.log("Set Rating value",rating)
    const newRating ={
      "ratings": rating
    }
  //  setIsPending(true)
   const PostRating = async ()=>{
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/ingredients/${sendId}/ratings`, newRating )
    .then(response=>{
      console.log(response)
    }).catch(error=>{console.log("THIS IS ERROR HANDLER", error)})

    // await Request(`http://localhost:3001/ingredients/${recept.id}/ratings`, {
    //   method: 'POST',
    //   headers:{"Content-Type": "application/json"},
    //   body: JSON.stringify(newRating)
    // }).then(()=>{
    //   console.log(newRating)
    //   console.log("IT was submitted")
  
    // })

    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // const options={
    //   method:'POST',
    //   headers,
    //   body:JSON.stringify(newRating),
    // };
    // const request = new Request(`http://localhost:3001/ingredients/${sendId}/ratings`, options);
    // const response = await fetch(request);
    // const status = await response.status;

    // if(status===200){
    //   console.log("its worked")
    // }
   
   }
   
 
   
    return (
        <div  className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
            
            
            
          );
        })}
       { location.pathname.includes(sendId) && <button  onClick={() => PostRating()}>Submit</button>}
      </div>
     
    );
    
}

// const MyStyledButton = styled.button`
 /* &:hover {
        background-color: yellow;
    } */
    /* background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer; */
// `;



export default StarRating