import axios from 'axios'
import React, { useState, useEffect } from 'react'

require('dotenv').config();

function TuHuerta (){

    const [dataPasos, setDataPasos] = useState([]);
    const [dataMantenimiento, setDataMantenimiento] = useState([]);
 

    useEffect(() => {
        peticionesGET()
    }, [])
  
    const peticionesGET = async () => {
  
  
      const respuestaPasos = await axios.get(process.env.REACT_APP_URL_API+"tuhuerta/listarPasos")
      
      const respuestaMantenimiento = await axios.get(process.env.REACT_APP_URL_API+"tuhuerta/listarMantenimiento")
      
      setDataPasos(respuestaPasos.data)
      setDataMantenimiento(respuestaMantenimiento.data)
          
    }

    const tituloSecion={
        tituloPagina: <h1>Construye tu huerta</h1>,
        tituloPasos : <h2>Primeros Pasos </h2> ,
        tituloMantenimiento : <h2>Mantenimiento y Cuidados</h2>,
    }  
  
    return (
        <>
            <div className="container text-center pt-5">
                <div className="row">
                    <div className="col">
                        {tituloSecion.tituloPagina}
                    </div>
                </div>
                <div className="row">
                    <div className="col text-start pb-3">
                        {tituloSecion.tituloPasos}
                    </div>
                </div>
            </div>

            {dataPasos.map((item) =>
                            <div className="container">
                        
                    <div className="card mb-3 max-width:540px;">
                        <div className="row g-0 image">
                            <div className="col-md-4 imageses-pasos">
                                <img src={item.imagen} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    
                                    <h4 className="card-title">{item.titulo}</h4>
                                    <h5>{item.subtitulo}</h5>
                                    <p className="card-text">
                                        {item.descripcion}
                                        <br/>
                                       <li>{item.descripcion2}</li>
                                    
                                    </p>     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                          
            )}

            <div className="container text-center pt-3 pb-3">
                <div className="row">
                    <div className="col text-start pb-3">
                        {tituloSecion.tituloMantenimiento}
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {dataMantenimiento.map((item) =>
                    <div className="col">
                        <div className="card h-100">
                            <img src={item.imagen} className="card-img-top icono-arma-huerta" alt="..."/>
                            <div className="card-body text-start">
                                <h4 className="card-title">{item.titulo}</h4>
                                <h5 className="card-title">{item.subtitulo}</h5>
                                <p className="card-text">
                                {item.descripcion}<br/><br/>
                                {item.descripcion2}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                </div>
            </div>
        </>
    );  
    
}
export default TuHuerta;