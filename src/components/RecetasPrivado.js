import axios from 'axios'
import React, { useState, useEffect } from 'react'
require('dotenv').config();

function RecetasPrivado() {

    const [datos, setDatos] = useState([]);
    const [imagen, setImagen] = useState();
    const [titulo_Ingredientes, setTitulo_Ingredientes] = useState("");
    const [ingredientes, setIngredientes] = useState("");
    const [titulo_ppal, setTitulo_ppal] = useState("");
    const [pasos, setPasos] = useState("");
    const [modifiedBy, setModifiedBy] = useState();
    const [validacionModificar, setValidacionModificar] = useState(false);
    const [idModificar, setIdModificar] = useState(0);
    

    useEffect(() => {
        cargarDatos()
    }, [])

    const cargarDatos = async () => {

        let token= sessionStorage.getItem("token")
        let head = {
            headers: { "Authorization" : "Bearer " + token}
        }

        const respuesta = await axios.get(process.env.REACT_APP_URL_API +"receta/list", head )
        
        setDatos(respuesta.data)
        setImagen("")
        setTitulo_Ingredientes("")
        setIngredientes("")
        setTitulo_ppal("")
        setPasos("")
        setModifiedBy("")
            
    }

    const agregarReceta = async (e) => {
        e.preventDefault()
        let token= sessionStorage.getItem("token")
        let head = {
            headers: { "Authorization" : "Bearer " + token}
        }
        let bodyParam = {
            imagen,
            titulo_Ingredientes,
            ingredientes,
            titulo_ppal,
            pasos,
            modifiedBy
        }
        
        await axios.post(process.env.REACT_APP_URL_API +"receta/add", bodyParam, head )
        
        cargarDatos()
        
    }

    const activarModificacion = async (id) => {

        datos.forEach(element => {
            if (element._id === id){
                setImagen(element.imagen)
                setTitulo_Ingredientes(element.titulo_Ingredientes)
                setIngredientes(element.ingredientes)
                setTitulo_ppal(element.titulo_ppal)
                setPasos(element.pasos)
                setModifiedBy(element.modifiedBy)
            }
        });

        setValidacionModificar(true)
        setIdModificar(id)
        
    }

    const modificarReceta = async (e) => {
        e.preventDefault()
        let token= sessionStorage.getItem("token")
        let head = {
            headers: { "Authorization" : "Bearer " + token}
        }
        let bodyParam = {
            _id:idModificar,
            imagen,
            titulo_Ingredientes,
            ingredientes,
            titulo_ppal,
            pasos,
            modifiedBy
        }
         await axios.put(process.env.REACT_APP_URL_API+"receta/update", bodyParam, head)

        cargarDatos()
        setValidacionModificar(false)

    }

    const eliminarReceta = async (id) => {

        let token= sessionStorage.getItem("token")
        let head = {
            headers: { "Authorization" : "Bearer " + token}
        }
        let bodyParam = {
            _id:id
        }
        await axios.put(process.env.REACT_APP_URL_API+"receta/estado",bodyParam,head)

        cargarDatos()

    }
    
    return (
        <div className="container border  pt-5 pb-5 my-5">

            <h2 className="text-center ">Administración Recetas Saludables</h2>
            <div className="row">

                <div className="col-9">
                    
                    <table className="table table-light table-striped">
                        <thead>
                            <tr className="table-success">
                                <th>Imagen</th>
                                <th>Titulo Ingredientes</th>
                                <th>Ingredientes</th>
                                <th>Titulo Principal</th>
                                <th>Pasos</th>
                                <th>Estado</th>
                                <th>Modificar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                datos.map((item) => {
                                    
                                    return (
                                                    
                                        <tr>                                           
                                            <td className="table-primary" >{item.imagen}</td>
                                            <td className="table-primary">{item.titulo_Ingredientes}</td>
                                            <td className="table-primary">{item.ingredientes}</td>
                                            <td className="table-primary">{item.titulo_ppal}</td>
                                            <td className="table-primary">{item.pasos}</td>
                                            <td className="table-primary">{item.estado}</td>
                                            <td>
                                                <button className="table-primary btn btn-warning btn-sm" onClick={()=>activarModificacion(item._id)}>Modificar</button>
                                            </td>
                                            <td>
                                                <button className="table-primary btn btn-danger btn-sm" onClick={()=>eliminarReceta(item._id)}>Eliminar</button>
                                            </td>
                                            
                                        </tr>
                                        
                                    );
                                })
                            }


                        </tbody>

                    </table>
                </div>
                <div className="col-3">
                    <h4 className="text-center">Formulario de Adición</h4>
                    <form >
                        <div className="mb-3">
                            <label className="form-label">Imagen</label>
                            <input type="text" className="form-control" onChange={(e) => setImagen(e.target.value)} value={imagen} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Titulo Ingredientes</label>
                            <input type="text" className="form-control" onChange={(e) => setTitulo_Ingredientes(e.target.value)} value={titulo_Ingredientes} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Ingredientes</label>
                            <input type="text" className="form-control" onChange={(e) => setIngredientes(e.target.value)} value={ingredientes}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Titulo Principal</label>
                            <input type="text" className="form-control" onChange={(e) => setTitulo_ppal(e.target.value)} value={titulo_ppal}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Pasos</label>
                            <input type="text" className="form-control" onChange={(e) => setPasos(e.target.value)}  value={pasos}/>
                        </div>                    
                        <div className="mb-3">
                            <label className="form-label">Actualizado por</label>
                            <input type="text" className="form-control" onChange={(e) => setModifiedBy(e.target.value)} value={modifiedBy}/>
                        </div>
                        {validacionModificar ?(
                            <button className="btn btn-warning" onClick={(e) => modificarReceta(e)}>Modificar</button>
                        ) : (
                            <button className="btn btn-success" onClick={(e) => agregarReceta(e)}>Agregar</button>
                        )}
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RecetasPrivado