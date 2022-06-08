import '../App.css';
import styled from 'styled-components';
import Category from '../components/category';
import ItemList from '../components/itemList';
import img from "../asset/./sky.jpg"
const TreatPage = ()=>(
  <>
<FullWrap >
  <Category/>
  <div className="IngredientsWrap">
  <ItemList/>
  </div>
  </FullWrap>
  </>
)

const FullWrap = styled.div`
display: flex;
justify-content: center;

/* background-image: url(${img}); */
aside{
  margin-right: 10rem;
}
`;


export default TreatPage;
