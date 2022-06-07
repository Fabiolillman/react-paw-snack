import '../App.css';
import Category from '../components/category';
import ItemList from '../components/itemList';

const FrontPage = ()=>(
  <>
<div className="FullWrap">
  <aside className="CatagorySection"><Category/></aside>
  <div className="IngredientsWrap">
  <ItemList/>
  </div>
  </div>
  </>
)

export default FrontPage;
