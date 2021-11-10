import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons"

const ArmaTuHuerta = props => {
    return (
        <>
        //Menú superior
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="!#">Comidas saludables</a>
                    <button className="btn-sm navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="!#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="!#">Noticias</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="!#" tabIndex="-1" aria-disabled="true">Construye tu huerta</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="!#" tabIndex="-1" aria-disabled="true">Tips y recetas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="!#" tabIndex="-1" aria-disabled="true">Orgánicos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="!#" tabIndex="-1" aria-disabled="true" data-bs-toggle="modal" data-bs-target="#ingresar">Ingresar</a>
                            </li>
                            <li className="nav-item dropdown d-none">
                                <a className="nav-link dropdown-toggle" href="!#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Administrar
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="!#">Noticias</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="!#">Construye tu huerta</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="!#">Tips y recetas</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="!#">Orgánicos</a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="!#">Cambiar el password</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control form-control-sm me-2" type="search" placeholder="texto a buscar" aria-label="Search" />
                            <button className="btn btn-sm btn-outline-light" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>

            <div className="modal fade" id="ingresar" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ingresar o registrarse</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" data-bs-toggle="tab" href="#TabIngreso">Ingresar</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#TabRegistro">Registrarse</a>
                                </li>
                            </ul>
                            <div id="myTabContent" className="tab-content">
                                {/* pestaña ingresar */}
                                <div className="tab-pane fade active show" id="TabIngreso">
                                    <form>
                                        <div className="my-2">
                                            <label htmlFor="IngresoCelular" className="form-label">Celular</label>
                                            <input type="texto" className="form-control" id="IngresoCelular" maxLength="10" />
                                            <div id="IngresoCelularHelp" className="form-text">Ingresa tu número celular (10 números)
                                            </div>
                                        </div>
                                        <label htmlFor="IngresoPass" className="form-label">Password</label>
                                        <div className="input-group mb-1">                      
                                            <input type="password" className="form-control" id="IngresoPass" maxLength="15" />
                                            <span className="input-group-text" id="basic-addon1">
                                                <FontAwesomeIcon icon={faEye} />
                                            </span>                      
                                        </div>
                                        <div id="IngresoPassHelp" className="form-text mb-2">Ingresa tu password (máx 15 caractéres)</div>
                                        <button type="submit" className="btn btn-sm btn-primary">Guardar información</button>
                                    </form>
                                </div>
                                {/* pestaña registro */}
                                <div className="tab-pane fade" id="TabRegistro">
                                    <form>
                                        <div className="my-2">
                                            <label htmlFor="RegistroNombre" className="form-label">Nombre completo</label>
                                            <input type="texto" className="form-control" id="RegistroNombre" maxLength="100" />
                                            <div id="RegistroNombreHelp" className="form-text">Regitra tu nombre completo (máx 100 caractéres)</div>
                                        </div>
                                        <div className="my-1">
                                            <label htmlFor="RegitroCorreo" className="form-label">Correo electrónico</label>
                                            <input type="email" className="form-control" id="RegitroCorreo" maxLength="100" />
                                            <div id="RegitroCorreosHelp" className="form-text">Regitra tu correo electrónico (máx 100 caractéres)
                                            </div>
                                        </div>
                                        <div className="my-1">
                                            <label htmlFor="RegitroCelular" className="form-label">Celular</label>
                                            <input type="texto" className="form-control" id="RegitroCelular" maxLength="10" />
                                            <div id="RegitroCelularHelp" className="form-text">Regitra tu número celular (10 números)
                                            </div>
                                        </div>
                                        <label htmlFor="RegitroPass" className="form-label">Password</label>
                                        <div className="input-group mb-1">                      
                                            <input type="password" className="form-control" id="RegitroPass" maxLength="15" />
                                            <span className="input-group-text" id="basic-addon1">
                                                <FontAwesomeIcon icon={faEye} />
                                            </span>                      
                                        </div>
                                        <div id="RegitroPassHelp" className="form-text mb-2">Registra tu password (máx 15 caractéres)</div>
                                            <button type="submit" className="btn btn-sm btn-primary">Guardar información</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Cerrar</button>              
                        </div>
                    </div>
                </div>
            </div>
        //Arma tu huerta
            <div className="container text-center pt-5">
                <div className="row">
                    <div className="col">
                        <h1>Titulo principal</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-start pb-3">
                        <h2>Titulo Secundario</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                    
                <div className="card mb-3 max-width:540px;">
                    <div className="row g-0 image">
                        <div className="col-md-4">
                            <img src="imag/paso1.jpg" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                             <div className="card-body">
                                <h4 className="card-title">Paso 1</h4>
                                <h5>Subtitulo</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.dignissimos voluptate? Quia, commodi nam nobis quam quis sequi iure illo asperiores sit sed eius. Itaque doloremque officia laboriosam.
                                Repellendus incidunt ratione voluptatem, possimus sint quidem quisquam tenetur quod quos vitae quas quasi laudantium iusto error dolor reprehenderit magni vel ut explicabo nisi distinctio doloremque. At numquam laboriosam quas!</p>
                                    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 max-width:540px;">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="imag/paso2.jpg" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title">Paso 2</h4>
                                <h5>Subtitulo</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                dignissimos voluptate? Quia, commodi nam nobis quam quis sequi iure illo asperiores sit sed eius. Itaque doloremque officia laboriosam.
                                Repellendus incidunt ratione voluptatem, possimus sint quidem quisquam tenetur quod quos vitae quas quasi laudantium iusto error dolor reprehenderit magni vel ut explicabo nisi distinctio doloremque. At numquam laboriosam quas!</p>
                                    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 max-width:540px;">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="imag/paso3.jpg" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title">Paso 3</h4>
                                <h5>Subtitulo</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere doloribus dignissimos voluptate? Quia, commodi nam nobis quam quis sequi iure illo asperiores sit sed eius. Itaque doloremque officia laboriosam.
                                Repellendus incidunt ratione voluptatem, possimus sint quidem quisquam tenetur quod quos vitae quas quasi laudantium iusto error dolor reprehenderit magni vel ut explicabo nisi distinctio doloremque. At numquam laboriosam quas!</p>
                                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center pt-3 pb-3">
                <div className="row">
                    <div className="col text-start pb-3">
                        <h2>Titulo Secundario</h2>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="imag/maleza.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere doloribus dignissimos voluptate? Quia, commodi nam nobis quam quis sequi iure illo asperiores sit sed eius. Itaque doloremque officia laboriosam.
                                Repellendus incidunt ratione voluptatem, possimus sint quidem quisquam tenetur quod 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="imag/regar.png" className="card-img-top " alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere doloribus dignissimos voluptate? Quia, commodi nam nobis quam quis sequi iure illo asperiores sit sed eius. Itaque doloremque officia laboriosam.
                                Repellendus incidunt ratione voluptatem, possimus sint quidem quisquam tenetur quod 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="imag/seguir-plantando.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere doloribus dignissimos voluptate? Quia, commodi nam nobis quam quis sequi iure illo asperiores sit sed eius. Itaque doloremque officia laboriosam.
                                Repellendus incidunt ratione voluptatem, possimus sint quidem quisquam tenetur quod 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="imag/fertilizar.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere doloribus dignissimos voluptate? Quia, commodi nam nobis quam quis sequi iure illo asperiores sit sed eius. Itaque doloremque officia laboriosam.
                                Repellendus incidunt ratione voluptatem, possimus sint quidem quisquam tenetur quod 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="imag/insecto.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere doloribus dignissimos voluptate? Quia, commodi nam nobis quam quis sequi iure illo asperiores sit sed eius. Itaque doloremque officia laboriosam.
                                Repellendus incidunt ratione voluptatem, possimus sint quidem quisquam tenetur quod 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="imag/proteger.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere doloribus dignissimos voluptate? Quia, commodi nam nobis quam quis sequi iure illo asperiores sit sed eius. Itaque doloremque officia laboriosam.
                                Repellendus incidunt ratione voluptatem, possimus sint quidem quisquam tenetur quod 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="imag/siembra-frecuente.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere doloribus dignissimos voluptate? Quia, commodi nam nobis quam quis sequi iure illo asperiores sit sed eius. Itaque doloremque officia laboriosam.
                                Repellendus incidunt ratione voluptatem, possimus sint quidem quisquam tenetur quod 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div clasName="container">
            </div>
        //Pie de página
            <ul className="nav justify-content-center pt-3 pb-1">
                <li className="nav-item">
                    <a className="nav-link" rel="noreferrer" target="_blank" href="https://www.who.int/es/news-room/fact-sheets/detail/healthy-diet">OMS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" rel="noreferrer" target="_blank" href="https://blog.famisanar.com.co/tag/alimentaci%C3%B3n-saludable">Famisanar</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" rel="noreferrer" target="_blank" href="https://www.niddk.nih.gov/health-information/informacion-de-la-salud/control-de-peso/ayudar-su-hijo">Depto Salud USA</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" rel="noreferrer" target="_blank" href="https://www.cdc.gov/healthyweight/spanish/healthyeating/eatmoreweightless.html">CCPE</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" rel="noreferrer" target="_blank" href="https://www.flowchem.com.co/rotulacion-de-alimentos-en-colombia">Flow Chemical</a>
                </li>
            </ul>
            <div className="container-fluid  text-center navbar-dark bg-primary pt-2">
                <div className="row">
                    <div className="col">
                        <p>Grupo 61 — Scrum grupo 8 — MisionTic  2021</p> 
                    </div>
                </div>
            </div>

        </>
    )
        

}
export default ArmaTuHuerta
    