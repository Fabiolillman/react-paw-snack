import React from 'react';
import './App.css';
// import Item from './components/item'
import FrontPage from './view/frontpage';
import { Outlet,BrowserRouter } from 'react-router-dom';
import SingleProduct from './view/singlepage';
import { Routes, Route, Link } from 'react-router-dom';
import ItemList from './components/itemList';
// import GetIngredients from './components/getingredients';
import FetchListByCategory from './components/categoryFilterRecept.tsx';
// StrictMode in index.tsx causes it to render twice

const App = ()=>{
  console.log(process.env.REACT_APP_API_BASE_URL,"TEST HERE IS IN ENV")
  return (
  <>
  <Link to={`/`}>Home</Link>
  
  {/* <GetIngredients/> */}
 {/* <BrowserRouter> */}
{/* <FrontPage/> */}
{/* </BrowserRouter> */}

<Routes>
  <Route path="/" element={<FrontPage/>}/>
  <Route path="/ingredients/:id" element={<SingleProduct/>}/>
  <Route path="/category/:id/ingredients" element={<FetchListByCategory/>}/>
</Routes>

  </>
  )
}

export default App;
