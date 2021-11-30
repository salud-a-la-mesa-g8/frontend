import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {
  Table,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
} from "reactstrap";

function ListadoProductos() {
  const [data, SetData] = useState([]);
  const [modalInsertar, SetModalInsertar] = useState(false);
  const [modalEditar, SetModalEditar] = useState(false);
  const [modalEliminar, SetModalEliminar] = useState(false);
  const [gestorSeleccionado, setGestorSeleccionado] = useState({
    
    nombre: "",
    precio: "",
    descripcion: "",
    imagen: "",
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
    await axios
      .get("http://localhost:3000/api/products") //Cambiar la ruta a la de la base de datos que se va a usar

      .then((response) => {
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
    delete gestorSeleccionado._id
    await axios
      .post("http://localhost:3000/api/new-product",gestorSeleccionado)
      .then((response) => {
        SetData(data.concat(response.data));
        abrirCerrarModalInsertar()
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const peticionDisabled=async()=>{
    console.log(gestorSeleccionado)
    await axios.delete(`http://localhost:3000/api/products/${gestorSeleccionado._id}`,gestorSeleccionado)
    .then(response=>{     
     //SetData(data.filter(gestor=>gestor.id!==response.data));
     peticionesGET();
      abrirCerrarModalEliminar();
    }).catch(error=>{
      console.log(error);
    })
  };
  const peticionUpdate = async () => {
   // delete gestorSeleccionado._id
  
    await axios    
      .put(`http://localhost:3000/api/products/${gestorSeleccionado._id}`,gestorSeleccionado)     
      .then(response=>{
        console.log(gestorSeleccionado)
        peticionesGET();      
        abrirCerrarModalEditar();
      }).catch(error=>{
        console.log(error);
      })
    }
  return (
    <div className="App">
      <br></br>
      <br></br>
      <br></br>
      <button className="btn btn-success" onClick={()=>abrirCerrarModalInsertar()}>Insertar nuevo registro</button>
    
      <br></br>
      <Table responsive>
        <thead>
          <tr>
          <th>ID</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Imagen</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((gestor) => (
            <tr key={gestor._id}>
               <td>{gestor._id}</td>
              <td>{gestor.nombre}</td>
              <td>{gestor.precio}</td>
              <td>{gestor.descripcion}</td>
              <td>{gestor.imagen}</td>
              <td>{gestor.estado}</td>
              <td>
              <button className="btn btn-primary" onClick={()=>seleccionarGestor(gestor, "Editar")}>Editar</button> {"  "}
              <button className="btn btn-danger" onClick={()=>seleccionarGestor(gestor, "Eliminar")}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal isOpen={modalInsertar} >
        <ModalHeader >
          Insertar Datos
        </ModalHeader>
        <ModalBody>
          
          <div className="form-group">
            <label>Producto:</label>
            <br></br>
            <input type="text" className="form-control" name="nombre" onChange={handleChange}></input>
            <label>Precio:</label>
            <br></br>
            <input type="text" className="form-control" name="precio" onChange={handleChange}></input>
            <label>Descripcion:</label>
            <br></br>
            <input type="text" className="form-control" name="descripcion" onChange={handleChange}></input>
            <label>Imagen:</label>
            <br></br>
            <input type="text" className="form-control" name="imagen" onChange={handleChange}></input>           
          </div>
        </ModalBody>
        <ModalFooter>
        <button className="btn btn-primary" onClick={()=>peticionAdd()}>Insertar</button>{"   "}
        <button className="btn btn-danger" onClick={()=>abrirCerrarModalInsertar()}>Cancelar</button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalEditar}>
      <ModalHeader>Editar Gestor de Base de Datos</ModalHeader>
      <ModalBody>
        <div className="form-group">
        <label>ID: </label>
          <br />
          <input type="text" className="form-control" readOnly value={gestorSeleccionado && gestorSeleccionado._id}/>
          <label>Producto:</label>
            <br></br>
            <input type="text" className="form-control" name="nombre" onChange={handleChange}  value={gestorSeleccionado && gestorSeleccionado.nombre}></input>
            <label>Precio:</label>
            <br></br>
            <input type="text" className="form-control" name="precio" onChange={handleChange}  value={gestorSeleccionado && gestorSeleccionado.precio}></input>
            <label>Descripcion:</label>
            <br></br>
            <input type="text" className="form-control" name="descripcion" onChange={handleChange}  value={gestorSeleccionado && gestorSeleccionado.descripcion}></input>
            <label>Imagen:</label>
            <br></br>
            <input type="text" className="form-control" name="imagen" onChange={handleChange}  value={gestorSeleccionado && gestorSeleccionado.imagen}></input>           
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={()=>peticionUpdate()}>Editar</button>{"   "}
        <button className="btn btn-danger" onClick={()=>abrirCerrarModalEditar()}>Cancelar</button>
      </ModalFooter>
    </Modal>
    <Modal isOpen={modalEliminar}>
        <ModalBody>
        ¿Estás seguro que deseas eliminar el elemento de Base de datos {gestorSeleccionado && gestorSeleccionado.nombre}?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>peticionDisabled()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>abrirCerrarModalEliminar()}
          >
            No
          </button>
        </ModalFooter>
      </Modal>

    </div>
  );
}

export default ListadoProductos;