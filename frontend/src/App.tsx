import './App.css';
import TreatPage from './view/treatpage';
import HomePage from './view/homepage';
import SingleProduct from './view/singlepage';
import { Routes, Route, Link } from 'react-router-dom';
import FetchListByCategory from './components/categoryFilterRecept.tsx';

const App = ()=>{
  return (
  <>
  {/* <Link to={`/treat`}>Treat</Link> */}
  {/* <Link to={`/`}>Home</Link> */}
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/treat" element={<TreatPage/>}/>
  <Route path="/ingredients/:id" element={<SingleProduct/>}/>
  <Route path="/category/:id/ingredients" element={<FetchListByCategory/>}/>
</Routes>
  </>
  )
}

export default App;
