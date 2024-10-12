import './App.css';
import Footer from './component/footer';
import Header from './component/header';
import Home from './pages/home';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import ProductDetails from './pages/productDetails';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/cart';

function App(){
    const [cartItems,setCartItems] = useState([]);

  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer theme='dark' />
          <Header cartItems={cartItems}/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/search" element={<Home/>} />
              <Route path="/product/:id" element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems}/>} />
              <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>} />

            </Routes>
        </div>
      </Router>
         <Footer />
        
    </div>
  );
}


export default App;
