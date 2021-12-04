import axios from 'axios'
import React, { useState, useEffect } from 'react'
require('dotenv').config();

function RecetasSaludables () {

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
            <div className="container border bg-secondary text-white pt-5 pb-5 my-5">
                <section className="text-center pb-5">
                <h1>RECETAS SALUDABLES</h1>
                </section>
            </div>

            { datos.map((item)=>{
        
                return (
                            
                    <div className="container">
                    
                        <div className="row">
                            <div className="col">
                                <div className="noticias-card sombra" >
                                    
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
                                <div className="noticias-card sombra">
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

export default RecetasSaludables;