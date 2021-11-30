import React, {useState, useEffect} from 'react'
import img_manzana from '../img/manzanas.jpg';
import img_zanahoria from '../img/zanahoria.jpg';
import img_semillas from '../img/semillas.jpg';
import img_tierra from '../img/tierra.jpg';
import img_lechuga from '../img/lechuga.jpg';
import axios from "axios";

function Organicos() {

  const [data, SetData] = useState([]);
  
  const peticionesGET = async () => {
    await axios
      .get("http://localhost:3000/api/products") //Cambiar la ruta a la de la base de datos que se va a usar

      .then((response) => {
        SetData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  };
  useEffect(() => {
    peticionesGET();
  }, []);

  console.log(data);
 
  return (      
    <div className="container">
      <div className="row mt-4">
      
      {data.map((prd, index) => 
      
        <div className="col-sm-12 col-md-4 col-lg-3 my-2" key={prd._id} >
          <div className="card">
            <img className="img card-img-top" src={prd.imagen} alt="img" />
            <div className="card-body">
              <h5 className="card-title text-center">{prd.nombre}</h5>
              <p className="card-text text-center">$ {prd.precio}</p>
            </div>
          </div>            
        </div>
        
      )}
    </div>
  </div>      
  );
}
  
  
export default Organicos;