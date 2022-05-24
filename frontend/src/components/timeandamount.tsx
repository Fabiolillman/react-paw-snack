import styled from "styled-components";

const TimeAmount = ({fetchList}:any)=>{
  // console.log(fetchList, "Inside Time and igredients")
    return (
      <TimeAmountWrap>
      <p>Ingredients ({fetchList.ingredients.length})</p>
      <p>|</p>
      <p>Ingrediens Tid{fetchList.timeInMins}</p>
      </TimeAmountWrap>
        )
}

const TimeAmountWrap = styled.div`
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`;

export default TimeAmount