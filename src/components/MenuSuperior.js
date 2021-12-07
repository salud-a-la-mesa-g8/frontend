import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import axios from 'axios'
import jwt from "jwt-decode";
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.css";

// import jwt from 'jwt-decode'

// import dot env
require('dotenv').config();

class MenuSuperior extends React.Component {
   // var login = async () => {
     // axios.post(process.env.URL_API,'login')
   // }
  constructor(props) {
    super(props);
    this.login = this.login.bind(this)
    this.recupera = this.recupera.bind(this)
    this.solicitarCodigo = this.solicitarCodigo.bind(this)
    this.state = {
      btnIngresar: true,
      head:"",      
      msgErr:"",
      msgOk:"",
      linkUsuarios:false,
      linkNoticias:false,
      linkHuerta:false,
      linkRecetas:false
    }
  }
  resetFormularios(){    
    document.getElementById("formCodigo").reset();
    document.getElementById("formCodigo").reset();
    document.getElementById("formRecupera").reset();    
  }    
  salirSis(){
    sessionStorage.clear();
    this.setState({
      btnIngresar: true
    })    
    window.location.reload(false);
  }
  revizarSesSt(){
    let token = sessionStorage.getItem("token")
    if(token !== null){
      this.setState({
        btnIngresar: false,
        head: {
          headers : {
            "Authorization" : "Bearer " + token
          }}
      })
      let auth = jwt(token).auth
      if (auth.includes('usuario')) {this.setState({linkUsuarios: true})}
      if (auth.includes('noticia')) {this.setState({linkNoticias: true})}
      if (auth.includes('huerta')) {this.setState({linkHuerta: true})}
      if (auth.includes('receta')) {this.setState({linkRecetas: true})}
      console.log("auth: ",auth)
    }    
  }  
  login(event){    
    event.preventDefault();
    // verificamos
    let formData = new FormData(event.target);
    if (formData.get('usuario') === "" || formData.get('pwd') === "") {
      this.setState({
        msgOk:null,
        msgErr: "Existen campos requeridos que están vacios"
      })   
      return false
    }
    // llenamos la variable de datos para el envío
    let data = {
      usuario: formData.get('usuario'),
      pwd: formData.get('pwd')
    }
    // si no hay errores
    axios.post(process.env.REACT_APP_URL_API+'usuario/login', data)
    .then( (res) => {      
      return res.data      
    })
    .then( (r) => {
      if(!r.msg.includes("error")){
        // 1- guardar sessSt el token
        sessionStorage.setItem('token',r.obj)
        // 2- mostrar menu admin
        this.setState({
          btnIngresar: false
        })
        // 3 refrescamos para cerrar modal 
        window.location.reload(false);   
      }else{
        this.setState({
          msgOk:null,
          msgErr:r.msg
        })        
      }
    })
    .catch( (err) => {
      this.setState({
        msgErr:err
      })
      console.log("err: ",err)
    })
    // if (this.comprobaciones.length === 0) {
    // }  
  }
  solicitarCodigo(event){
    event.preventDefault();    
    let formData = new FormData(event.target);
    let data = {
      usuario: formData.get('usuarioRI')
    }
    // si no hay errores
    axios.post(process.env.REACT_APP_URL_API+'usuario/recuperap1', data)
    .then( (res) => {
      return res.data
    })
    .then( (r) => {
      if (r.msg.includes('error')) {
        this.setState({
          msgOk:null,
          msgErr:r.msg
        })
      } else {
        this.setState({
          msgOk:r.msg,
          msgErr:null
        })
      }
    })
    .catch( (err) => {
      this.setState({
        msgOk:null,
        msgErr:err
      })      
    })
  }
  recupera(event){
    event.preventDefault();
    let formData = new FormData(event.target);
    let data = {
      usuario: formData.get('usuarioR2'),
      codigo: formData.get('codigo'),
      pwd: formData.get('pwdRI'),
    }
    // si no hay errores
    axios.post(process.env.REACT_APP_URL_API+'usuario/recuperap2', data)
    .then( (res) => {
      return res.data      
    })
    .then( (r) => {
      if (r.msg.includes("error")) {
        this.setState({
          msgOk:null,
          msgErr:r.msg
        })
      }else{
        // 1- guardar sessSt el token
        sessionStorage.setItem('token',r.obj)
        // 2- mostrar menu admin
        this.btnIngresar = false
        // 3 refrescamos para cerrar modal 
        window.location.reload(false);
      }      
    })
    .catch( (err) => {
      console.log("err: ",err)
    })
  }
  componentDidMount(){
    this.revizarSesSt();
  }  
  render() {
    const { btnIngresar, msgOk, msgErr } = this.state;
    return ( 
      <>      
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Comidas saludables
            </Link>            
            <button
              className="btn-sm navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
            <span className="d-flex navbar-toggler-icon"></span>
            </button>            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* si se encuentra logueado o NO */}
                { btnIngresar ?                
                  <li className="nav-item">
                    <a                    
                      className="nav-link"
                      href="!#"
                      tabIndex="-1"
                      aria-disabled="true"
                      data-bs-toggle="modal"
                      data-bs-target="#ingresar"
                    >
                      Ingresar
                    </a>
                  </li>
                  :              
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="!#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Administrar
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">                      
                      <li>
                        <a 
                        className="dropdown-item"
                        onClick={this.salirSis}
                        href="/" >
                          Salida del sistema
                        </a>
                      </li>
                      <li className="dropdown-divider">
                        <hr className="dropdown-divider" />
                      </li>
                      {
                        this.state.linkUsuarios ?
                        <li>
                          <Link className="dropdown-item" to="/adminusuarios">
                            Administrar Usuarios
                          </Link>
                        </li>
                        :
                        <span></span>
                      }
                      {
                        this.state.linkNoticias ?
                        <li>
                          <Link className="dropdown-item" to="/adminnoticias">
                            Noticias
                          </Link>
                        </li>
                        :
                        <span></span>
                      }
                      {
                        this.state.linkHuerta ?
                        <li>
                          <Link className="dropdown-item" to="/adminhuerta">
                            Construye tu huerta
                          </Link>
                        </li>
                        :
                        <span></span>
                      }
                      {
                        this.state.linkRecetas ?
                        <li>
                          <Link className="dropdown-item" to="/adminrecetas">
                            Tips y recetas
                          </Link>
                        </li>                      
                        :
                        <span></span>
                      }
                    </ul>
                  </li>
                }
                
                <li className="nav-item">
                  <Link className="nav-link active" to="/" >
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/noticias">
                    Noticias
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tuhuerta">									
                    Construye tu huerta
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/recetas">
                  Tips y recetas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/organicos">									
                    Orgánicos
                  </Link>
                </li>
              
                
              </ul>              
            </div>
          </div>
        </nav>

        {/* MODAL INGRESO RECUIPERACION */}        
        <div
          className="modal"
          id="ingresar"
          tabIndex="-1"
          aria-labelledby="ingresar"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ingresar o recuperar ingreso
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      className="nav-link active enModal"
                      data-bs-toggle="tab"
                      href="#TabIngreso"
                      onClick={ () => this.setState({msgOk: null, msgErr:null}) }
                    >
                      Ingresar
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link enModal"
                      data-bs-toggle="tab"
                      href="#TabCodigo"
                      onClick={ () => this.setState({msgOk: null, msgErr:null}) }
                    >
                      Pedir código
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link enModal"
                      data-bs-toggle="tab"
                      href="#TabRecupera"
                      onClick={ () => this.setState({msgOk: null, msgErr:null}) }
                    >
                      Recuperar ingreso
                    </a>
                  </li>
                </ul>
                <div id="myTabContent" className="tab-content">
                  {/* pestaña ingresar */}
                  <div className="tab-pane fade active show" id="TabIngreso">
                    <form 
                      id="formIngreso" 
                      onSubmit={this.login}
                    >

                      <div className="my-2">
                        <label htmlFor="usuario" className="form-label">
                          Celular o email
                        </label>
                        <input
                          type="texto"
                          id="usuario"
                          name="usuario"
                          className="form-control"
                          minLength={6}
                          maxLength={100}
                          required
                        />
                        <div className="form-text">
                          Ingresa tu número celular o tu correo (100 caracteres)
                        </div>
                      </div>

                      <label htmlFor="pwd" className="form-label">
                        Password
                      </label>

                      <div className="input-group mb-1">
                        <input
                          type="password"
                          id="pwd"
                          name="pwd"
                          className="form-control"
                          minLength={6}
                          maxLength={15}
                          required
                        />
                        <span className="input-group-text" id="basic-addon1">
                          <FontAwesomeIcon icon={faEye} />
                        </span>
                      </div>

                      <div id="IngresoPassHelp" className="form-text mb-2">
                        Ingresa tu password (máx 15 caractéres)
                      </div>

                      <div className="text-center">
                        <span className="badge rounded-pill bg-dark text-wrap my-2">
                        {msgErr}
                        </span>
                      </div>
                      

                      <button type="submit" className="btn btn-sm btn-primary">
                        Enviar información
                      </button>

                    </form>
                  </div>

                  {/* pestaña pedir codigo */}
                  <div className="tab-pane fade" id="TabCodigo">
                  <form 
                      onSubmit={this.solicitarCodigo}
                      id="formCodigo"      
                  >

                    <div className="my-2">

                      <label htmlFor="usuarioRI" className="form-label">
                        Celular o email
                      </label>

                      <input
                        type="texto"
                        id="usuarioRI"
                        name="usuarioRI"
                        className="form-control"
                        minLength={6}
                        maxLength={100}
                      />

                      <button type="submit"
                      className="btn btn-sm btn-primary">
                        Solicitar código (máximo 3 minutos)
                      </button>

                      {                        
                        msgOk || msgErr? 
                        <div className="text-center">
                          <span className="badge rounded-pill bg-dark text-wrap my-2">{msgErr}{msgOk}</span>
                        </div>
                        :
                        <div></div>
                      }                      
                      
                    </div>

                    </form>
                  </div>

                  {/* pestaña recuperar ingreso */}
                  <div className="tab-pane fade" id="TabRecupera"
                  >
                    
                    <form 
                      onSubmit={this.recupera} 
                      id="formRecupera"
                    >
                      
                      <div className="my-1">
                        <label htmlFor="usuarioR2" className="form-label">
                          Celular o email
                        </label>
                        <input
                          type="texto"
                          id="usuarioR2"
                          name="usuarioR2"
                          className="form-control"
                          maxLength="100"
                        />
                        <div className="form-text">
                          Ingresa tu celular o tu e-mail (max 100 caracteres)
                        </div>
                      </div>

                      <div className="my-1">
                        <label htmlFor="codigo" className="form-label">
                          Código recibido
                        </label>
                        <input
                          type="text"
                          id="codigo"
                          name="codigo"
                          className="form-control"
                          maxLength="6"
                        />
                        <div className="form-text">
                          Ingresa el código númerico recibido (todos los 6 números)
                        </div>
                      </div>

                      <div className="my-1">
                        <label htmlFor="pwdRI" className="form-label">
                          Nuevo password
                        </label>
                        <input
                          type="password"
                          id="pwdRI"
                          name="pwdRI"
                          className="form-control"
                          maxLength="15"
                        />
                        <div className="form-text">
                          Regisra tu nuevo pasword (max 15 caracteres)
                        </div>
                      </div>
                      
                      {                        
                        msgOk || msgErr? 
                        <div className="text-center">
                          <span className="badge rounded-pill bg-dark text-wrap my-2">{msgErr}{msgOk}</span>
                        </div>
                        :
                        <div></div>
                      }

                      <button type="submit" className="btn btn-sm btn-primary">
                        Enviar información
                      </button>

                    </form>
                  </div>

                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-sm btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>                        
        
        {/* MODAL DE SALIDA DEL SISTEMA */}
        <div 
          className="modal fade" 
          id="salir" 
          tabIndex="-1" 
          role="dialog" 
          aria-labelledby="salir" 
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Salir del sistema</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
              <div className="modal-body">
                <div className="container-fluid">
                  Realmente desea salir del sistema ?
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Si deseo</button>
              </div>
            </div>
          </div>
        </div>                        

		  </>

     );
  }
}
 
export default MenuSuperior;

