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
     <div className='description-container'>
     <p>{recept.description}</p>
     <div className='StarAndAmount'>
       <TimeAmount fetchList={recept}/>
      <StarRating sendRating={recept.ratings} sendId={recept._id}/>
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
margin: auto;
max-width: 40rem;
/* position: relative; */
/* left: 50%; */
/* transform: translateX(-50%); */
/* padding: 2em calc(50% - 341px + 2em); */
box-sizing: border-box;
height: 100vh;
display: flex;
flex-direction: column;
/* background-color: red; */
section{
    display: flex;
    overflow: hidden;
}
h1{
    text-align: center;
}
section h2{
margin: 1rem 0;
}
section > :first-child{
   /* background-color: green; */
   width: 30%;
   margin-right: 4%;
}
section > :nth-child(2){
   /* background-color: pink; */
   width: 66%;
}
div:nth-child(2) ul li{
   background-color: lightgray;
   padding: 0.5rem;
   margin-top: 0.5rem;
   box-sizing: border-box;

}
div:first-child > ul{
    background-color: lightgray;
    height: 100%;

    box-sizing: border-box;
}

.TopIntroWrap{
    display: flex;
    margin: 1.5rem 0;
}
.description-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin-right: 1.5rem;
}

.StarAndAmount{
/* display: flex; */
align-items: center;
background-color: lightgray;
}
`;
export default SingleProduct