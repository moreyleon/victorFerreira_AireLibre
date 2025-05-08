import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./Button";
import Buttonedit from "./Buttonedit";
import Buttondel from "./Buttondel";


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
         
        
          <div className="tabla-header">
            <Link to={`${urlCreate}`}>
              {/* <Button variant="success">Crear</Button> */}
            </Link>
          </div>
          <table className="tabla-productos">
            <thead>
              <tr>
                {Array.from(Object.keys(data[0])).map((prop, index) => (
                  <th key={index}>{prop}</th>
                
                ))}
                <th>Accion</th>
              </tr>
            </thead>
          
            <tbody>
              {data.map((product, index) => (
               
                <tr key={index}>
                  {Array.from(Object.keys(product)).map((element, index) => (
                    <td key={index + element}>{product[element]}</td>
                  ))}
                  <td>

                    <div className="acciones">
                      <Link to={`${urlDetail}/${product.id}`}>
                        <Button> <i class="fa-solid fa-eye"></i> </Button>
                      </Link>
                      <Link to={`${urlEdit}/${product.id}`}>
                        <Buttonedit><i class="fa-solid fa-pen-to-square"></i></Buttonedit>
                      </Link>
                      
                      <Buttondel variant="danger" onClick={(e) => modelDelete(e,product.id)} > <i class="fa-solid fa-eraser"></i> </Buttondel> 
                        
                    
                    </div>
                  </td>
                </tr>
                 
              ))}
            </tbody>
        
          {}
          </table>
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