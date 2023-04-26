import React from 'react';

import App from './App';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Produuct from "./pages/Prodduct.js";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
  const rootElement = document.getElementById("root");


render(
  <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<App />} />
      <Route path="Register" element={<Register />} />
      <Route path="Login" element={<Login />} />
      <Route path='Produuct/Cart'  element={<Cart/>} />
      <Route path='ProductList' element={<ProductList/>} />
      <Route path='Produuct' element={<Produuct/>} />
          
     
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

