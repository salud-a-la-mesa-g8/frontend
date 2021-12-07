import React from 'react';
import axios from 'axios';
import jwt from 'jwt-decode'
import { 
  Table, 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  FormGroup, 
  Label, 
  Input 
} from 'reactstrap';

class AdminUsuarios extends React.Component{

  state ={
    data: [],
    modalUsrNvo: false,
    modalUsrEdit: false,
    modificacionPor:"",
    msg:"",
    form:{
      _id:"",
      nombre:"",
      correo:"",
      celular:"",
      estado:1,
      auth:"",
      modifiedBy:"",
      pwd:""
    }
  }

  componentDidMount() {
    this.modificadoPor()
    this.reqList()    
  }  

  modificadoPor = async () => {
    let correo = await jwt(sessionStorage.getItem("token")).correo    
    this.setState({modificacionPor: correo})    
  }
  
  reqList = async () => {
    let token = await sessionStorage.getItem("token")
    let cabecera = {
      headers : {
       "Authorization" : "Bearer " + token
      }
    }    
    await axios.get(process.env.REACT_APP_URL_API+'usuario/list', cabecera)
    .then( (res) => {
      return res.data
    })
    .then( (r) => {
      this.setState({data: r.obj})
    })
  }

  handleChange = (e) =>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  visibleModalUsrNvo = () => {
    this.setState({modalUsrNvo: !this.state.modalUsrNvo})
    this.setState({msg:""})
  }

  visibleModalUsrEdit = (registro) => {
    this.setState({modalUsrEdit: !this.state.modalUsrEdit, msg:"", form:registro})
  }
  
  insertar = async () => {
    let token = await sessionStorage.getItem("token")
    let cabecera = {
      headers : {
       "Authorization" : "Bearer " + token
      }
    }  
    var usuarioNuevo =  {...this.state.form}
    usuarioNuevo.modifiedBy = this.state.modificacionPor
    usuarioNuevo.pwd = "123456"
    await axios.post(process.env.REACT_APP_URL_API+'usuario/add',usuarioNuevo, cabecera)
    .then( (res) => {
      return res.data
    })
    .then( (r) => {
      if (r.msg.includes('ok')) {
        this.setState({modalUsrNvo: !this.state.modalUsrNvo})
        this.setState({data: r.obj})
      } else {
        this.setState({msg:r.msg})
      }
      
    })
    .catch(err => console.log("error: ",err))
  }

  editar = async () => {
    let token = await sessionStorage.getItem("token")
    let cabecera = {
      headers : {
       "Authorization" : "Bearer " + token
      }
    }  
    var usuarioEditar =  {...this.state.form}
    usuarioEditar.modifiedBy = this.state.modificacionPor
    await axios.put(process.env.REACT_APP_URL_API+'usuario/update',usuarioEditar, cabecera)
    .then( (res) => {
      return res.data
    })
    .then( (r) => {
      if (r.msg.includes('ok')) {
        this.setState({modalUsrEdit: !this.state.modalUsrEdit})
        this.reqList()
      } else {
        this.setState({msg:r.msg})      
      }      
    })
    .catch(err => console.log("error: ",err))
  }
  
  inactivar = async (id) => {
    let token = await sessionStorage.getItem("token")
    let cabecera = {
      headers : {
       "Authorization" : "Bearer " + token
      }
    }    
    await axios.put(process.env.REACT_APP_URL_API+'usuario/estado',{_id:id}, cabecera)
    .then( (res) => {
      return res.data
    })
    .then( (r) => {
      if (r.msg.includes('ok')) {        
        this.reqList()
      } else {
        this.setState({msg:r.msg})      
      }      
    })
    .catch(err => console.log("error: ",err))
  }

  render(){
    
    return(  
      <div className='container mt-5'>

        <Button 
          className='btn-sm' 
          color="success" 
          onClick={this.visibleModalUsrNvo}
        >
          Adicionar usuario
        </Button>

        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Celular</th>
              <th>Activo</th>
              <th>Permisos</th>
              <th>Modificado por</th>
              <th>Modificado el</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            { this.state.data.map( (e) => (
                <tr key={e.celular}>
                  <td>{e.nombre}</td>
                  <td>{e.correo}</td>
                  <td>{e.celular}</td>
                  <td>{e.estado}</td>
                  <td>{e.auth}</td>
                  <td>{e.modifiedBy}</td>
                  <td>{e.modifiedAt}</td>
                  <td>
                    <Button                      
                      color="danger"
                      className='btn-sm my-1'
                      onClick={() => this.inactivar(e._id)}
                    >
                      In/activar
                    </Button> {"  "}

                    <Button
                      color="warning"
                      className='btn-sm'
                      onClick={() => this.visibleModalUsrEdit(e)}
                    >
                      Editar
                    </Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        
        <Modal isOpen={this.state.modalUsrNvo}>

          <ModalHeader>
            <div className='h1'>Adicionar usuario</div>
          </ModalHeader>
          
          <ModalBody>            

            <FormGroup>
              <Label>Nombre</Label>
              <Input 
                type='text'
                name='nombre'
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Correo</Label>
              <Input 
                type='email'
                name='correo'
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Celular</Label>
              <Input 
                type='text'
                name='celular'
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Permisos</Label>
              <Input 
                type='text'
                name='auth'
                onChange={this.handleChange}
              />
            </FormGroup>

          </ModalBody>

          <ModalFooter>

            <div className="col-12 text-center">
              <span className="badge rounded-pill bg-dark text-wrap my-2">
              {this.state.msg}
              </span>
            </div>

            <Button 
              className='btn-sm' 
              onClick={this.visibleModalUsrNvo} 
              color="secondary"
            >
              Cerrar
            </Button>

            <Button 
              className='btn-sm' 
              color="primary"
              onClick={this.insertar}
            >
              Guardar información
            </Button>

          </ModalFooter>

        </Modal>

        <Modal isOpen={this.state.modalUsrEdit}>

          <ModalHeader>
            <div className='h1'>Modificar usuario</div>
          </ModalHeader>
          
          <ModalBody>            

            <FormGroup>
              <Label>Nombre</Label>
              <Input 
                type='text'
                name='nombre'
                onChange={this.handleChange}
                value={this.state.form.nombre}
              />
            </FormGroup>

            <FormGroup>
              <Label>Correo</Label>
              <Input 
                type='email'
                name='correo'
                onChange={this.handleChange}
                value={this.state.form.correo}
              />
            </FormGroup>

            <FormGroup>
              <Label>Celular</Label>
              <Input 
                type='text'
                name='celular'
                onChange={this.handleChange}
                value={this.state.form.celular}
              />
            </FormGroup>

            <FormGroup>
              <Label>Activo</Label>
              <Input 
                type='number'
                name='estado'
                min="0" 
                max="1"
                onChange={this.handleChange}
                value={this.state.form.estado}
              />
            </FormGroup>

            <FormGroup>
              <Label>Permisos</Label>
              <Input 
                type='text'
                name='auth'
                onChange={this.handleChange}
                value={this.state.form.auth}
              />
            </FormGroup>

          </ModalBody>

          <ModalFooter>

            <div className="col-12 text-center">
              <span className="badge rounded-pill bg-dark text-wrap my-2">
              {this.state.msg}
              </span>
            </div>

            <Button 
              className='btn-sm' 
              onClick={this.visibleModalUsrEdit}
              color="secondary"
            >
              Cerrar
            </Button>

            <Button 
              className='btn-sm' 
              color="primary"
              onClick={this.editar}
            >
              Modificar información
            </Button>

          </ModalFooter>

        </Modal>
      </div>    

      

    )          
  }
}

/*
function AdminUsuarios(){
  const [data, setData] = useState([]);
  
  const reqList = async () => {
    let token = sessionStorage.getItem("token")
    let head = {
      headers : {
       "Authorization" : "Bearer " + token
      }
    }
    await axios.get(process.env.REACT_APP_URL_API+'usuario/list', head)
    .then( (res) => {
      return res.data
    })
    .then( (r) => {
      setData(r.obj)
    })

  }
  useEffect( () => {
    reqList();
  })

  return(
    <>
      <div className='container mt-5'>
        <h1 className='text-center'>Administración de Usuarios</h1>
      </div>

      <MaterialTable 
        columns={columnas}
        data= {data}
        title="Administración de usuarios"
        actions={[
         {
          icon:'edit',
          tooltip:'Editar usuario',
          onClick:(event, rowData) => alert("editando usuario: "+rowData.nombre)
         },
         {
          icon:'delete',
          tooltip:'Inactivar usuario',
          onClick:(event, rowData) => alert("inactivando usuario: "+rowData.nombre)
         }  
        ]}
        options={{
          actionsColumnIndex: -1
        }}
        localization={{
          header:{
            actions:"Acciones"
          }
        }}
      />

    </>
  )      
}
*/

export default AdminUsuarios;