import styled from "styled-components";
// import img from "../asset/./bone.png"

const TimeAmount = ({fetchList}:any)=>{
    return (
      <TimeAmountWrap>
      <p>Ingredients ({fetchList.ingredients.length})</p>
      <p className="distance"></p>
      <p>Cook Time {fetchList.timeInMins} mins</p>
      </TimeAmountWrap>
        )
}

const TimeAmountWrap = styled.div`
display: flex;
justify-content: center;
background-color: gray;
    /* padding: 0 0.5rem 0 0.5rem; */
    background-size:3rem;
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    & .distance{
      width: 0.1rem;
      background-color: #cbcbcb;
      height: 1rem;
      margin:0.43rem
      }
`;

export default TimeAmount