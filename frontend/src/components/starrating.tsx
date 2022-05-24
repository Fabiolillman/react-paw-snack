
import { useState} from 'react';
import { useLocation } from "react-router-dom";
import axios from "axios";


const StarRating = ({sendRating, sendId}:any)=>{
 
 
  const test = sendRating[sendRating.length-1]

  console.log("THIS IS THE url YOU'RE LOOKING FOR", process.env.REACT_APP_API_BASE_URL)
    const location = useLocation()
    const [rating, setRating] = useState(test);
    const [hover, setHover] = useState(0);
    const [isPending, setIsPending] = useState<boolean>(false);
    console.log("Set Rating value",rating)
    const newRating ={
      "ratings": rating
    }
  //  setIsPending(true)
   const PostRating = async ()=>{
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/ingredients/${sendId}/ratings`, newRating )
    .then(response=>{
      setIsPending(true)
      console.log(response)
    }).catch(error=>{console.log("THIS IS ERROR HANDLER", error)})
   }
   
    return (
     <>{isPending && <p>Tack för rösten!</p>}
       {!isPending &&   <div  className="star-rating">
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
       
      </div>}
      
     </>
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