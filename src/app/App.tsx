import React from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import ShoppingList from "./pages/Shopping List/ShoppingList";
import Products from "./pages/Products/Products";
import Calories from "./pages/Calories/Calories";


function App() {
    return (
     <Router>
         <NavBar/>
         <Routes>
             <Route path="/" element={<ShoppingList/>}/>
             <Route path='products/*' element={<Products/>}/>
             <Route path='calories/*' element={<Calories/>}/>
         </Routes>
     </Router>
  );
}

export default App;
