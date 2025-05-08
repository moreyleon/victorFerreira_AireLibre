
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";

function ProductsDetail () {

  const { id } = useParams()
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const getProduct = async () => {
      try {
          const response = await fetch(`http://localhost:3000/api/product/detail/${id}`)

          if (!response.ok) {
             
              return
          }

          const product = await response.json()
         
          setProduct(product.data)
          setIsLoading(false)

      } catch (error) {
          console.log("Error al realizar la solicitud:", error)
      }
  }

  useEffect(() => {
      getProduct()
  }, [])

  return (
      <>
          {isLoading ? <h1>Loading...</h1> : 
          <div className="container">
              <h1>{product.name}</h1>
              <img src={product.image} alt={product.name} />
              <p>{product.description}</p>
              <p>Precio: {product.price}</p>
              <p>Marca: {product.brandId}</p>
              <p>Categoria: {product.categoryId}</p>
          </div>}
      </>
  )
 
}

export default ProductsDetail