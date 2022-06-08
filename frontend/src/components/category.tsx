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
<aside className="CatagorySection">
<ul>{
category.map((category:any,) => 
<Link to={`/category/${category._id}/ingredients`} key={category._id}>
<CategoryList key={category._id}>{category._id}({category.count})
</CategoryList>
</Link>
)}</ul>
</aside>
</>
)
}




const CategoryList = styled.li`
font-size: 1.3rem;
font-weight: 500;
list-style: none;
color: red;
text-align: center;
margin: 0.5rem 0 0.5rem 0;
line-height: 6rem;
/* border: 3px solid white; */
width: 12rem;
height: 6rem;
background-image: url(${img});
background-repeat: no-repeat;
background-size: 15rem 12.5rem;
background-position: center;
transition: transform 0.3s ease-in-out;
&:hover{
  transform: rotate(6deg);
  /* color:blue */
  }
`;
export default Category