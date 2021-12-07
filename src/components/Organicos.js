import React from 'react'
import img_manzana from '../img/manzanas.jpg';
import img_zanahoria from '../img/zanahoria.jpg';
import img_semillas from '../img/semillas.jpg';
import img_tierra from '../img/tierra.jpg';
import img_lechuga from '../img/lechuga.jpg';

function Organicos() {
  const prod = 
  [
    {nombre: "manzanas", precio:"1000", imagen:img_manzana, cat:""},
    {nombre: "zanahoria", precio:"1000", imagen:img_zanahoria, cat:""},
    {nombre: "semillas", precio:"1500", imagen:img_semillas, cat:""},
    {nombre: "tierra", precio:"3200", imagen:img_tierra, cat:""},
    {nombre: "lechuga", precio:"800", imagen:img_lechuga, cat:""},
  ];    
  return (      
    <div className="container">
      <div className="row mt-4">
      
      {prod.map((prd, index) => 
      
        <div className="col-sm-12 col-md-4 col-lg-3 my-2" key={index} >
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