import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import Header from './componentes/header'
import './assets/css/'
import Products from './Pages/Products'
import ProductsDetail from './Pages/ProductsDetail'
import CreateProducts from './Pages/CreateProducts'
import Start  from './componentes/Start';


function App() {


  return (
    <>
    <Header />
    <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/Usuarios" element={<h1>Usuarios</h1>} />
              <Route path="/Productos" element={<Products />} />
              <Route path="/Products/DetailProducts/:id" element={<ProductsDetail />} />
              <Route path="/Products/CreateProducts" element={<CreateProducts />} />
             
            </Routes>
     

    </>
  );
}

export default App


