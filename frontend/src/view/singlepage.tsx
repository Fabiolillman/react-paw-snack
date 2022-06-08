import StarRating from '../components/starrating';
import TimeAmount from '../components/timeandamount';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const SingleProduct = ()=>{
    const [recept, setRecept] = useState<any>([]);
    const params = useParams();
    useEffect(() => {
        const getReceptById = async () => {
        const recepts = await fetch(`${process.env.REACT_APP_API_BASE_URL}/ingredients/${params.id}`)
        .then(res => res.json())
        await setRecept(recepts)
        }
        getReceptById();
    }, )


    return(
        <>
        {recept.map((recept: any) => 
     <SinglePageStyle key={recept._id}>
     {/* <div className="SinglePageWrap"> */}
     <h1>{recept.title}</h1>
     <div className="TopIntroWrap">
     <div>
     <p>{recept.description}</p>
     <div className='StarAndAmount'>
     <StarRating sendRating={recept.ratings} sendId={recept._id}/> | <TimeAmount fetchList={recept}/>
     </div>
     </div>
     <img src={recept.imageUrl} alt="" />
     </div>
     <section>
     <div>  
     <h2>Ingredients</h2>
     <ul>
     {recept.ingredients.map((ingredients: any) => (<li key={ingredients.ingredient}>{ingredients.amount} {ingredients.unit} {ingredients.ingredient}</li>))}
     </ul>
     </div>  
     <div>
         <h2>Instructions</h2>
     <ul>
     { recept.instructions.map((instructions: any) => (<li key={instructions}>{instructions}</li>))}
     </ul>
     </div>
     </section>
   
     {/* </div> */}
     </SinglePageStyle>
        )} 
        </> 
    )
}

const SinglePageStyle = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
/* background-color: red; */
section{
    display: flex;
}
section ul{
    background-color: orange;
}
.red{
    color: red;
}

.TopIntroWrap{
    display: flex;
}

.StarAndAmount{
display: flex;
align-items: center;
background-color: lightgray;
}
`;
export default SingleProduct