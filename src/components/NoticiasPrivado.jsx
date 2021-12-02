import axios from 'axios'
import React, { useState, useEffect } from 'react'
require('dotenv').config();


function Noticias() {

    const [datos, setDatos] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [texto_corto, setTexto_corto] = useState("");
    const [texto_largo, setTexto_largo] = useState("");
    const [imagen, setImagen] = useState();
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

        const respuesta = await axios.post(process.env.REACT_APP_URL_API +"noticia/list", head )

        // const respuesta = await axios.get('http://localhost:3000/api/noticia/list')
        
        setDatos(respuesta.data)
        setTitulo("")
        setAutor("")
        setTexto_corto("")
        setTexto_largo("")
        setImagen("")
        setModifiedBy("")
            
    }

    const agregarNoticia = async (e) => {
        e.preventDefault()
        let token= sessionStorage.getItem("token")
        let head = {
            headers: { "Authorization" : "Bearer " + token}
        }
        let bodyParam = {
            titulo,
            autor,
            texto_corto,
            texto_largo,
            imagen,
            modifiedBy
        }
        
        await axios.post(process.env.REACT_APP_URL_API +"noticia/add", bodyParam, head )
       
        // await axios.post("http://localhost:3000/api/noticia/add",{
        //                     titulo,
        //                     autor,
        //                     texto_corto,
        //                     texto_largo,
        //                     imagen,
        //                     modifiedBy
        //                 })
        
        cargarDatos()
        
    }

    const activarModificacion = async (id) => {

        datos.forEach(element => {
            if (element._id === id){
                setTitulo(element.titulo)
                setAutor(element.autor)
                setTexto_corto(element.texto_corto)
                setTexto_largo(element.texto_largo)
                setImagen(element.imagen)
                setModifiedBy(element.modifiedBy)
            }
        });

        setValidacionModificar(true)
        setIdModificar(id)
        
    }

    const modificarNoticia = async (e) => {
        e.preventDefault()
        let token= sessionStorage.getItem("token")
        let head = {
            headers: { "Authorization" : "Bearer " + token}
        }
        let bodyParam = {
            _id:idModificar,
            titulo,
            autor,
            texto_corto,
            texto_largo,
            imagen,
            modifiedBy
        }
         await axios.put(process.env.REACT_APP_URL_API+"noticia/update", bodyParam, head)


        // await axios.put("http://localhost:3000/api/noticia/update",{
        //                     _id:idModificar,
        //                     titulo,
        //                     autor,
        //                     texto_corto,
        //                     texto_largo,
        //                     imagen,
        //                     modifiedBy
        //                 })
        cargarDatos()
        setValidacionModificar(false)

    }

    const eliminarNoticia = async (id) => {

        let token= sessionStorage.getItem("token")
        let head = {
            headers: { "Authorization" : "Bearer " + token}
        }
        let bodyParam = {
            _id:id
        }
        await axios.put(process.env.REACT_APP_URL_API+"noticia/estado",bodyParam,head)

        cargarDatos()

    }
    
    return (
        <div className="container mt-100">

            <h2 className="text-center ">Administración Contenido Noticias Saludables</h2>
            <div className="row">

                <div className="col-8">
                    
                    <table className="table table-light">
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Autor</th>
                                <th>Texto corto</th>
                                <th>Texto largo</th>
                                <th>Imgen</th>
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
                                            <td>{item.titulo}</td>
                                            <td>{item.autor}</td>
                                            <td>{item.texto_corto}</td>
                                            <td>{item.texto_largo}</td>
                                            <td>
                                                <img src="" alt="imagen" />
                                            </td>
                                            <td>{item.estado}</td>
                                            <td>
                                                <button className="btn btn-warning btn-sm" onClick={()=>activarModificacion(item._id)}>Modificar</button>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger btn-sm" onClick={()=>eliminarNoticia(item._id)}>Eliminar</button>
                                            </td>
                                            
                                        </tr>
                                        
                                    );
                                })
                            }


                        </tbody>

                    </table>
                </div>
                <div className="col-4">
                    <h4 className="text-center">Formulario de Adición</h4>
                    <form >
                        <div className="mb-3">
                            <label className="form-label">Titulo</label>
                            <input type="text" className="form-control" onChange={(e) => setTitulo(e.target.value)} value={titulo} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Autor</label>
                            <input type="text" className="form-control" onChange={(e) => setAutor(e.target.value)} value={autor} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Texto Corto</label>
                            <input type="text" className="form-control" onChange={(e) => setTexto_corto(e.target.value)} value={texto_corto}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Texto Largo</label>
                            <input type="text" className="form-control" onChange={(e) => setTexto_largo(e.target.value)} value={texto_largo}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Imagen</label>
                            <input type="text" className="form-control" onChange={(e) => setImagen(e.target.value)}  value={imagen}/>
                        </div>                    
                        <div className="mb-3">
                            <label className="form-label">Actualizado por</label>
                            <input type="text" className="form-control" onChange={(e) => setModifiedBy(e.target.value)} value={modifiedBy}/>
                        </div>
                        {validacionModificar ?(
                            <button className="btn btn-warning" onClick={(e) => modificarNoticia(e)}>Modificar</button>
                        ) : (
                            <button className="btn btn-success" onClick={(e) => agregarNoticia(e)}>Agregar</button>
                        )}
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Noticias
