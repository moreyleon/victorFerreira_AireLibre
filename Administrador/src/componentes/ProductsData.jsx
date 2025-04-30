import PropTypes from "prop-types";
import { Link } from "react-router-dom";



function ProductsData({ data, title, urlCreate, urlEdit, urlDelete, urlDetail }) {
  
    const modelDelete = async (e, id) => {  
     try{
      
      const success = confirm("¿Estás seguro de que deseas eliminar esta película ?");
      if (!success) {
        
        return; 
      }
      
          
      const response = await fetch(`${urlDelete}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
      
        return;
      }
      
      const data = await response.json();
    
      window.location.reload();
      
     }catch (error) {
      console.log(error);
     } 
      
    };
    return (
      <>
        <section className="tabla">
         
         <div className="titleTable"> 
          </div>
          <div >
            <Link to={`${urlCreate}`}>
              {/* <Button variant="success">Crear</Button> */}
            </Link>
          </div>
          
            <thead>
              <tr>
                {Array.from(Object.keys(data[0])).map((prop, index) => (
                  <th key={index}>{prop}</th>
                ))}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((product, index) => (
                <tr key={index}>
                  {Array.from(Object.keys(product)).map((element, index) => (
                    <td key={index + element}>{product[element]}</td>
                  ))}
                  <td>
                    <div >
                      <Link to={`${urlDetail}/${product.id}`}>
                        {/* <Button variant="info"></Button> */}
                      </Link>
                      <Link to={`${urlEdit}/${product.id}`}>
                        {/* <Button variant="warning"></Button> */}
                      </Link>
                      {/* <Button variant="danger" onClick={(e) => modelDelete(e,product.id)}></Button> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
        
          {}
        </section>
      </>
    );
  }
  
  ProductsData.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
    urlCreate: PropTypes.string.isRequired,
    urlEdit: PropTypes.string.isRequired,
    urlDelete: PropTypes.string.isRequired,
    urlDetail: PropTypes.string.isRequired,
  };
  
  export default ProductsData;