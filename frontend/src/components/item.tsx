import StarRating from "./starrating"
import styled from "styled-components";
import TimeAmount from "./timeandamount";
import { Link } from "react-router-dom";

const SingleItem = ({recept}:any)=>{
    return (
        <FullWrap>     
        <div className="BorderWrapper">
        
        <div className="NameStarWrap">
        <StarRating sendRating={recept.ratings} recept={recept._id}/>
        <Link to={`/ingredients/${recept._id}`}>
        <h1>{recept.title}</h1>
        </Link>
       
        </div>
        <div className="MyStyledDiv">
        <img src={recept.imageUrl} alt="" />
        <p>{recept.description}</p>
        </div>
        <TimeAmount fetchList={recept}/>
        </div>     
        </FullWrap>
        )
}

const FullWrap=styled.div` 
h1{
    margin: 1rem 0 1rem 0;
}
img {
    width: 10rem;
    height: 10rem;
    margin-right: 1rem;
    /* border-radius: 50%; */
}

.BorderWrapper {

    /* background-color: pink; */
    border: 3px solid gray;
    border-radius: 11px;
    /* box-sizing: border-box; */
    align-items: center;
    margin-top: 1rem;
}

.NameStarWrap {
    /* background-color: yellow; */
    /* border-radius: 4px; */
    /* box-sizing: border-box; */
    display: flex;
    flex-direction: column;
    align-items: center;
}

.MyStyledDiv {
    /* background-color: orange; */
    display: flex;
    align-items: center;
    margin: 0 0 1rem 1rem;

}

`;
export default SingleItem