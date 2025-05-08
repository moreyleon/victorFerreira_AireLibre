import { useState, useEffect } from "react";
import ProductsData from "../componentes/ProductsData";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/articulo");

      if (!response.ok) {
        console.log("Error en la respuesta de la API");
        return;
      }

      const products = await response.json();
      console.log("Respuesta de la API:", products);

      setProducts(products.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error al realizar la solicitud:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <>{isLoading ? <h1>Loading...</h1> 
    : <ProductsData data={products} 
    urlCreate={"/Tables/products/create"}
     urlDetail={"/Tables/products/detail"} 
     urlEdit={"/Tables/products/edit"}
      urlDelete={"/Tables/products/delete"} 
      title="producto" />}</>;
};

export default Products;
