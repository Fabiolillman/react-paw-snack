import styled from "styled-components"




const SearchBar = ({value,setSearch}:any)=>{
    return (
      <MyStyledDiv> 
      <input  onChange={e => setSearch(e.target.value)} value={value} type="text" placeholder="Search"/>
      </MyStyledDiv>
        )
}



const MyStyledDiv = styled.div`

margin: 1rem auto;
   width: 70%;
   height: 2.5rem;
    background-color: white;
    border: 3px solid gray;
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
 & input{
  width: 100%;
  
   border: none;
    border-radius: 4px;
    outline-style: none;
 }
  & button{
    width: 4rem;
   height: 2.3rem;
  }
`;

export default SearchBar