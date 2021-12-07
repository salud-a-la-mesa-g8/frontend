import axios from 'axios'
import React, { useState, useEffect } from 'react'
require('dotenv').config();

function AsesoriaNutricional () {

    const [datos, setDatos] = useState([]);
   
  
    useEffect(() => {
      cargarDatos()
    }, [])
  
    const cargarDatos = async () => {
  
      
      const respuesta = await axios.get(process.env.REACT_APP_URL_API+"receta/list_one")
      
      setDatos(respuesta.data)
          
    }
  
    return (

        <>
            <div className="card container border text-white mt-5 pt-3 pb-3">
                <section className="text-center">
                <h1>RECETAS SALUDABLES</h1>
                </section>
            </div>

            { datos.map((item)=>{
        
                return (
                            
                    <div className="container">
                    
                        <div className="row">
                            <div className="col">
                                <div className="card noticias-card sombra" >
                                    
                                    <img src={item.imagen} className="card-img-top" alt="imagen"/>
                                    <div className="card-body">
                                        <p className="card-text">
                                            <h5>{item.titulo_Ingredientes}</h5>
                                            {item.ingredientes}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col">
                                <div className="card noticias-card sombra">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.titulo_ppal}</h5>
                                        <p>{item.pasos}</p>
                                            
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                
                );
     })
    } 

    </>

    )
}

export default AsesoriaNutricional;