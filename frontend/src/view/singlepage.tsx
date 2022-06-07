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
     <div className="SinglePageWrap">
     <h1>{recept.title}</h1>
     <div className="TopIntroWrap">
     <div>
     <p>{recept.description}</p>
     <div className='StarAndAmount'>
     <StarRating sendRating={recept.ratings} sendId={recept._id}/> | <TimeAmount fetchList={recept}/>
     </div>
     </div>
     <img src={recept.imageUrl} alt="" />
     <ul>
     {recept.ingredients.map((ingredients: any) => (<li key={ingredients.ingredient}>{ingredients.amount} {ingredients.unit} {ingredients.ingredient}</li>))}
     </ul>
     <ul>
     { recept.instructions.map((instructions: any) => (<li key={instructions}>{instructions}</li>))}
     </ul>
     </div>
     </div>
     </SinglePageStyle>
        )} 
        </> 
    )
}

const SinglePageStyle = styled.div`
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