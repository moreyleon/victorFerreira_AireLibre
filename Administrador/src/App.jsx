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

function App() {


  return (
    <>
    <Header />
    <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/Usuarios" element={<h1>Usuarios</h1>} />
              <Route path="/Productos" element={<Products />} />
              <Route path="/Products/ProductsDetail/:id" element={<ProductsDetail />} />
              <Route path="/Products/CreateProducts" element={<CreateProducts />} />
             
            </Routes>
     

    </>
  );
}

export default App


