import axios from 'axios'
import React, { useState, useEffect } from 'react'
require('dotenv').config();

function Noticias () {

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    cargarDatos()
  }, [])

  const cargarDatos = async () => {

    const respuesta = await axios.get(process.env.REACT_APP_URL_API+"noticia/list_one")
    
    setDatos(respuesta.data)
        
  }

  return (

    <>
      {/* Inicia sección de Noticias dinamica*/}

      <div className="card container border text-white mt-5 pt-2">
        <section className="text-center pt-2 pb-2">
        <h1>NOTICIAS SALUDABLES</h1>
        </section>

      { datos.map((item)=>{
        
          return (
            <section >
                
                <div className="noticias-articulo">
        
                  
                  <img src={item.imagen} className="col-md-3 float-md-end mb-3 ms-md-3" alt="..." />
          
                  <h3 className="noticias-titulo text-primary">{item.titulo}</h3>
                  <h5>Autor: {item.autor}</h5>
                  <p>{item.texto_corto}</p>  
                    
                  <p>{item.texto_largo}</p>

                  <hr style={{
                    color: "black",
                    backgroundColor: "black",
                    height: 10
                  }}/>

                </div>
              
            </section>   
          
          );
       })
      }
       </div>
      {/* Termina seccion de Noticias dinamica */}
          
      
      </>
    )
}  

export default Noticias;