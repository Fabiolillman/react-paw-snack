import '../App.css';
// import Item from '../components/item'
// import SearchBar from '../components/searchbar';
import Category from '../components/category';
import ItemList from '../components/itemList';
// import FetchListByCategory from '../components/categoryFilterRecept.tsx';

// StrictMode in index.tsx causes it to render twice

const FrontPage = ()=>(

  <>
<div className="FullWrap">
  
  <aside className="CatagorySection"><Category/></aside>
  <div className="IngredientsWrap">
    <p>hello</p>
   {/* <SearchBar/> */}
  {/* <Item /> */}
  <ItemList/>
  {/* <FetchListByCategory/> */}
  </div>
  </div>
  </>
)

export default FrontPage;
