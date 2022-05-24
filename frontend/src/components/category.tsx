import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"


const Category = ()=>{
  const [ category, setCategory] = useState<any>([]);

  useEffect(()=>{
const loadCategory= async()=>{
const res= await fetch(`${process.env.REACT_APP_API_BASE_URL}/category`);
const category = await res.json();
setCategory(category);
    }
    loadCategory()
    console.log(category)
    // console.log(category)
  },[])
  
  // const ModifiedArr = countCategory(category)

return(
<>

<ul>{
category.map((category:any,) => 
<Link to={`/category/${category._id}/ingredients`} key={category._id}>
<li key={category._id}>{category._id}({category.count})
</li>
</Link>
)}</ul>
</>
)
}




// const FullWrap = styled.div`
//  border: 3px solid gray;
//     border-radius: 4px;
//     box-sizing: border-box;
//     /* display: flex; */
//     align-items: center;
// `;
export default Category