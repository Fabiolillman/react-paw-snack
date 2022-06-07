import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import img from "../asset/./filled-bone.png"


const Category = ()=>{
  const [ category, setCategory] = useState<any>([]);

  useEffect(()=>{
const loadCategory= async()=>{
const res= await fetch(`${process.env.REACT_APP_API_BASE_URL}/category`);
const category = await res.json();
setCategory(category);
    }
    loadCategory()
  },[])
return(
<>
<ul>{
category.map((category:any,) => 
<Link to={`/category/${category._id}/ingredients`} key={category._id}>
<CategoryList key={category._id}>{category._id}({category.count})
</CategoryList>
</Link>
)}</ul>
</>
)
}




const CategoryList = styled.li`
font-weight: 500;
list-style: none;
color: red;
text-align: center;
margin: 1rem 0 1rem 0;
line-height: 4rem;
/* border: 3px solid white; */
min-width: 10rem;
height: 4rem;
background-image: url(${img});
background-repeat: no-repeat;
background-size: 12rem 10rem;
background-position: center;
transition: transform 0.3s ease-in-out;
&:hover{
  transform: rotate(6deg);
  /* color:blue */
  }
`;
export default Category