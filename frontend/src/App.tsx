import './App.css';
import FrontPage from './view/frontpage';
import SingleProduct from './view/singlepage';
import { Routes, Route, Link } from 'react-router-dom';
import FetchListByCategory from './components/categoryFilterRecept.tsx';

const App = ()=>{
  return (
  <>
  <Link to={`/`}>Home</Link>
  <div>hello</div>
<Routes>
  <Route path="/" element={<FrontPage/>}/>
  <Route path="/ingredients/:id" element={<SingleProduct/>}/>
  <Route path="/category/:id/ingredients" element={<FetchListByCategory/>}/>
</Routes>
  </>
  )
}

export default App;
