
import { useState} from 'react';
import { useLocation } from "react-router-dom";
import axios from "axios";


const StarRating = ({sendRating, sendId}:any)=>{
 
  // const startRating = sendRating[sendRating.length-1]
 const startRating = sendRating.reduce((a:number,b:number)=>a+b,0)/sendRating.length

    const location = useLocation()
    const [rating, setRating] = useState(startRating);
    const [hover, setHover] = useState(0);
    const [isPending, setIsPending] = useState<boolean>(false);
    const newRating ={
      "ratings": rating
    }

   const PostRating = async ()=>{
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/ingredients/${sendId}/ratings`, newRating )
    .then(()=>{
      setIsPending(true)
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

export default StarRating