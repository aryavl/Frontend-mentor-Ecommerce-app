
import {Routes,Route} from 'react-router'
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import { useState } from 'react';

function App() {
  const [cart,setCart]=useState([])
  return (
   <div>
      
      <Routes>
        <Route 
        path='/'
        element={<Home cart={cart} setCart={setCart}/>}
        
        />
        <Route
        path='/cart'
        element={<Cart cart={cart} setCart={setCart}/>}
        />
      </Routes>
   </div>
  );
}

export default App;
