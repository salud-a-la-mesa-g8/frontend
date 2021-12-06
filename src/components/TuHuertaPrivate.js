import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";



//axios.post(process.env.REACT_APP_URL_API+'tuhuerta/crear') 
//axios.delete(process.env.REACT_APP_URL_API+'tuhuerta/eliminar') 
//axios.get(process.env.REACT_APP_URL_API+'tuhuerta/listar') 
//axios.put(process.env.UREACT_APP_URL_API+'tuhuerta/actualizar')

require('dotenv').config();

function TuHuerta () {

  const [data, SetData] = useState([{

  }]);
  const [modalInsertar, SetModalInsertar] = useState(false);
  const [modalEditar, SetModalEditar] = useState(false);
  const [modalEliminar, SetModalEliminar] = useState(false);
  const [gestorSeleccionado, setGestorSeleccionado] = useState({

    imagen: "",
    titulo: "",
    subtitulo: "",
    descripcion: "",
    descripcion2: "",
    modifiedBy: "",
    tipo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGestorSeleccionado({
      ...gestorSeleccionado,
      [name]: value,
    });
    console.log(gestorSeleccionado)
  };

  const abrirCerrarModalInsertar=()=>{
    SetModalInsertar(!modalInsertar)
  }

  const abrirCerrarModalEditar=()=>{
    SetModalEditar(!modalEditar)
  }
  const abrirCerrarModalEliminar=()=>{
    SetModalEliminar(!modalEliminar)
  }

  const peticionesGET = async () => {

    let token= sessionStorage.getItem("token")
    let head = {
        headers: { "Authorization" : "Bearer " + token}
    }
    await axios.get(process.env.REACT_APP_URL_API+'tuhuerta/listar',head) 
    //await axios.get(process.env.REACT_APP_URL_API+'tuhuerta/listar')
      .then((response) => {
        console.log(response.data);
        SetData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const seleccionarGestor=(gestor, caso)=>{
    setGestorSeleccionado(gestor);
     (caso==="Editar")?
     abrirCerrarModalEditar(): abrirCerrarModalEliminar();
   }
   useEffect(() => {
     peticionesGET();
   }, []);

   const peticionAdd = async () => {
    let token= sessionStorage.getItem("token")
    let head = {
        headers: { "Authorization" : "Bearer " + token}
    }

    delete gestorSeleccionado._id
    await axios.post(process.env.REACT_APP_URL_API+'tuhuerta/crear',gestorSeleccionado, head)
      .then((response) => {
        SetData(data.concat(response.data));
        abrirCerrarModalInsertar()
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const peticionUpdate = async () => {
    let token= sessionStorage.getItem("token")
    let head = {
        headers: { "Authorization" : "Bearer " + token}
    }
    //console.log("gestor "+ gestorSeleccionado._id);
    // delete gestorSeleccionado._id
     await axios.put(process.env.REACT_APP_URL_API+`tuhuerta/actualizar/${gestorSeleccionado._id}`,gestorSeleccionado, head)     
       .then(response=>{
         console.log(gestorSeleccionado)
         peticionesGET();      
         abrirCerrarModalEditar();
       }).catch(error=>{
         console.log(error);
       })
     }

     //componente de estado.

    const peticionDisabled=async()=>{

      let token= sessionStorage.getItem("token")
      let head = {
          headers: { "Authorization" : "Bearer " + token}
      }

      console.log(gestorSeleccionado)
      //await axios.put(process.env.REACT_APP_URL_API+`tuhuerta/estado/${gestorSeleccionado._id}`,gestorSeleccionado, head)
      await axios.put(process.env.REACT_APP_URL_API+`tuhuerta/estado/`,gestorSeleccionado,head)
      .then(response=>{     
      //SetData(data.filter(gestor=>gestor.id!==response.data));
      peticionesGET();
        abrirCerrarModalEliminar();
      }).catch(error=>{
        console.log(error);
      })
    };  


     
    return (
      <>
        <div className="App">
        <br/> <br/>  <br/> <br/>
        <h2 className="text-center ">Administración Contenido Tu Huerta</h2>
        
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Button color="light" onClick={()=>abrirCerrarModalInsertar()} >Insertar nuevo apartado</Button>
          
        </div>
  
        <br/>
          <Table>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Titulo</th>
                <th>Subtitulo</th>
                <th>Descripción Principal</th>
                <th>Descripción Secundaria</th>
                <th>Tipo</th>
                <th>Estado</th>
                <th className="d-grid gap-2 d-md-flex justify-content-md-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map((gestor) => (
                <tr key={gestor._id}> {/*?Ver si no es necesario*/}
                  <td>{gestor.imagen}</td>
                  <td>{gestor.titulo}</td>
                  <td>{gestor.subtitulo}</td>
                  <td>{gestor.descripcion}</td>
                  <td>{gestor.descripcion2}</td>
                  <td>{gestor.tipo}</td>
                  <td>{gestor.estado}</td>
                  <td>
                   
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      <Button color="primary" onClick={()=>seleccionarGestor(gestor, "Editar")} class="btn btn-primary me-md-2" type="button">Editar</Button>
                      {"  "} {/*qué significa*/}
                      <Button color="info"  onClick={()=>seleccionarGestor(gestor, "Eliminar")} class="btn btn-primary" type="button">Eliminar</Button>
                    </div> 
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Modal isOpen={modalEditar}>
            <ModalHeader>
              <div>
                <h3>Editar apartado</h3>
              </div>
            </ModalHeader>

            <ModalBody>
          
            <FormGroup>
                <label>Imagen:</label>

                <input
                  className="form-control"
                  name="imagen"
                  type="text"
                  onChange={handleChange}
                  value={gestorSeleccionado && gestorSeleccionado.imagen}
                />
              </FormGroup>
              <FormGroup>
                <label>Titulo:</label>

                <input
                  className="form-control"
                  name="titulo"
                  type="text"
                  onChange={handleChange}
                  value={gestorSeleccionado && gestorSeleccionado.titulo}
                />
              </FormGroup>

              <FormGroup>
                <label>Subtitulo:</label>
                <input
                  className="form-control"
                  name="subtitulo"
                  type="text"
                  onChange={handleChange}
                  value={gestorSeleccionado && gestorSeleccionado.subtitulo}
                />
              </FormGroup>

              <FormGroup>
                <label>Descripción Principal:</label>
                <input
                  className="form-control"
                  name="descripcion"
                  type="text"
                  onChange={handleChange}
                  value={gestorSeleccionado && gestorSeleccionado.descripcion}
                />
              </FormGroup>
              <FormGroup>
                <label>Descripción Secundaria:</label>
                <input
                  className="form-control"
                  name="descripcion2"
                  type="text"
                  onChange={handleChange}
                  value={gestorSeleccionado && gestorSeleccionado.descripcion2}
                />
              </FormGroup>
              <FormGroup>
                <label>Tipo:</label>
                <input
                  className="form-control"
                  name="tipo"
                  type="number"
                  onChange={handleChange}
                  value={gestorSeleccionado && gestorSeleccionado.tipo}
                />
              </FormGroup>

              <FormGroup>
                <label>Modificado por:</label>
                <input
                  className="form-control"
                  name="modifiedBy"
                  type="text"
                  onChange={handleChange}
                  value={gestorSeleccionado && gestorSeleccionado.modifiedBy}
                />
              </FormGroup>
              
            </ModalBody>

            <ModalFooter>
              <Button
                color="primary"
                onClick={()=>peticionUpdate()}
              >
                Editar
              </Button>
              
              <Button
                color="info"
                onClick={()=>abrirCerrarModalEditar()}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={modalInsertar}>
            <ModalHeader>
              <div>
                <h3>Insertar apartado</h3>
              </div>
            </ModalHeader>

            <ModalBody>
            
            <FormGroup>
                <label>Imagen:</label>
                <input
                  className="form-control"
                  name="imagen"
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>
                  
              <FormGroup>
                <label>Titulo:</label>
                <input
                  className="form-control"
                  name="titulo"
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>Subtitulo:</label>
                <input
                  className="form-control"
                  name="subtitulo"
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>Descripción Principal:</label>
                <input
                  className="form-control"
                  name="descripcion"
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>Descripción Secundaria:</label>
                <input
                  className="form-control"
                  name="descripcion2"
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>Tipo:</label>
                <input
                  className="form-control"
                  name="tipo"
                  type="number"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>Creado por:</label>
                <input
                  className="form-control"
                  name="modifiedBy"
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>
            </ModalBody>

            <ModalFooter>
              <Button color="primary" onClick={()=>peticionAdd()}>
                Insertar
              </Button>
              
              <Button 
                className="btn btn-info"
                onClick={()=>abrirCerrarModalInsertar()}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>



          {/*-----------Opción de eliminar--------- */}

          <Modal isOpen={modalEliminar}>
            <ModalBody>
            ¿Estás seguro que deseas cambiar el  estado del item {gestorSeleccionado && gestorSeleccionado.titulo} de la Base de datos ?
            </ModalBody>
            <ModalFooter>
              <Button  className="btn btn-danger" onClick={()=>peticionDisabled()}>
                Sí
              </Button>
              <Button 
                className="btn btn-secondary"
                onClick={()=>abrirCerrarModalEliminar()}
              >
                No
              </Button >
            </ModalFooter>
          </Modal> 
        </div>
      </>
    );



    

  }

export default TuHuerta;
