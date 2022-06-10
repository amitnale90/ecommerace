import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import DefaultLayout from "./Components/DefaultLayout"
import ProductDetails from './Components/ProductDetails';

import Header from './Components/Header';
import Cart from './Components/Cart';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<DefaultLayout/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
