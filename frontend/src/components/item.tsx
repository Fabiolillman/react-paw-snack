import StarRating from "./starrating"
import styled from "styled-components";
import TimeAmount from "./timeandamount";
import { Link } from "react-router-dom";


const SingleItem = ({recept}:any)=>{
    const test = ()=>{
        console.log(recept.title)
    }
    return (
        <FullWrap>
        
        <div className="BorderWrapper">
        <div className="MyStyledDiv">
        <div className="NameStarWrap">
        <Link to={`/ingredients/${recept._id}`}>
        <h1>{recept.title}</h1>
        </Link>
        <StarRating sendRating={recept.ratings} recept={recept._id}/>
        </div>
        <p>{recept.description}</p>
        </div>
        {/* <p>img name{recept.imageUrl}</p> */}
        <img src={recept.imageUrl} alt="" />
        <TimeAmount fetchList={recept}/>
        </div>
       
        </FullWrap>
        )
}




const FullWrap = styled.div`

     .BorderWrapper{
        border: 3px solid gray;
    border-radius: 4px;
    box-sizing: border-box;
    align-items: center;
    margin-top: 1rem;
    }
     .NameStarWrap{
        border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    }
     .MyStyledDiv{
    border-radius: 4px;
    box-sizing: border-box;
    /* display: flex; */
    align-items: center;
    }
`;
// const MyStyledDiv = styled.div`
//     border-radius: 4px;
//     box-sizing: border-box;
//     align-items: center;
// `;

// const NameStarWrap = styled.div`
//     border-radius: 4px;
//     box-sizing: border-box;
//     display: flex;
//     align-items: center;
// `;
export default SingleItem