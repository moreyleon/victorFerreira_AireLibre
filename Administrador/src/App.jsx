import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import '../App.css';
import Header from './componentes/header'
import '../header.css';
import '../start.css'
import Products from './Pages/Products'
import ProductsDetail from './Pages/ProductsDetail'
import CreateProducts from './Pages/CreateProducts'
import Start  from './componentes/Start';
import './productsData.css'
import Users from './componentes/Users';

function App() {


  return (
    <>
    <Header />
    <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/Usuarios" element={<Users />} />
              <Route path="/Productos" element={<Products />} />
              <Route path="/Productos/ProductsDetail/:id" element={<ProductsDetail />} />
              <Route path="/Productos/CreateProducts" element={<CreateProducts />} />
             
            </Routes>
     

    </>
  );
}

export default App


