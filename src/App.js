import './App.css';
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipeId from './Component/RecipeId';
import Category from './Component/Category';
import SearchElement from './Component/SearchElement';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:idMeal' element={<RecipeId />} />
          <Route path='/category/:name' element={<Category/>}/>
          <Route path='/search/:searchTerm' element={<SearchElement/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
