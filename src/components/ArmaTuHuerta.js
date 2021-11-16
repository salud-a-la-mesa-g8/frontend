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
                        <h1>Construye tu huerta</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-start pb-3">
                        <h2>Primeros Pasos</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                    
                <div className="card mb-3 max-width:540px;">
                    <div className="row g-0 image">
                        <div className="col-md-4 imageses-pasos">
                            <img src="img/paso1.jpg" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                             <div className="card-body">
                                <h4 className="card-title">Paso 1</h4>
                                <h5>Elige el lugar</h5>
                                <p className="card-text">
                                Empieza por definir el espacio que le asignaras a la huerta ya que determina el fracaso o el éxito. ten en cuenta lo siguiente <br/>
                                    <ul>
                                        <li>
                                            Cantidad de sol que recibe el lugar
                                        </li>
                                        <li>
                                            Contar con un punto de agua cerca
                                        </li>
                                        <li>
                                            Protección contra corrientes de aire
                                        </li>
                                    </ul>
                                </p>
                                    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 max-width:540px;">
                    <div className="row g-0">
                        <div className="col-md-4 imageses-pasos">
                            <img src="img/paso2.jpg" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title">Paso 2</h4>
                                <h5>Construir el huerto</h5>
                                <p className="card-text">
                                Con el sitio definido es hora de poner manos a la obra y diseñar la estructura del huerto<br/>
                                    <ul>
                                        <li>
                                            Decide si será horizontal o vertical
                                        </li>
                                        <li>
                                            Usa materiales usados: cajones y armarios viejos, botellas plásticas
                                        </li>
                                        <li>
                                            Si no tienes un espacio continuo puedes usar macetas de diferentes tamaños
                                        </li>
                                    </ul>
                                </p>
                                    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 max-width:540px;">
                    <div className="row g-0">
                        <div className="col-md-4 imageses-pasos">
                            <img src="img/paso3.jpg" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title">Paso 3</h4>
                                <h5>Seleccionando tierra y semillas</h5>
                                <p className="card-text">
                                Adquiere tierra fértil, lo más recomendable es que uses sustrato 100% orgánico puedes hacerlo tu mismo con una compostera. Para las semillas  <br/>
                                    <ul>
                                        <li>
                                            Elige plantas de temporada
                                        </li>
                                        <li>
                                            Combina distintos tipos de plantas complementarias
                                        </li>
                                        <li>
                                            Crea o usa semilleros
                                        </li>
                                    </ul>
                                </p>
                                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center pt-3 pb-3">
                <div className="row">
                    <div className="col text-start pb-3">
                        <h2>Mantenimiento y Cuidados</h2>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="img/maleza.png" className="card-img-top icono-arma-huerta" alt="..."/>
                            <div className="card-body text-start">
                                <h4 className="card-title">Arranque la maleza</h4>
                                <h5 className="card-title">Haga limpieza</h5>
                                <p className="card-text">
                                Retire las hierbas indeseadas, que se encuentren en el suelo, puede realizarlo manualmente o con algún tipo de producto natural que elimine todas clases de hierbas de hoja ancha y angosta. Se puede aplicar rociándolo directamente en las malezas, esperando 10 días hasta que se sequen. Posteriormente, limpie con un rastrillo. <br/><br/>
                                Ojo que las malezas compiten con las plantas de hortalizas por la luz, el agua, espacio y nutrientes, y por lo general ganan la competencia.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="img/regar.png" className="card-img-top icono-arma-huerta" alt="..."/>
                            <div className="card-body text-start">
                                <h4 className="card-title">Riegue con Regularidad</h4>
                                <h5 className="card-title">El agua: el mejor amigo</h5>
                                <p className="card-text">Si deja que las plantas de hortalizas se sequen, muchas dejarán de producir, y de lo contrario, sufrirá la calidad de la cosecha. En el caso de tomates, pimientos y lechugas, sufrirán podredumbre apical, y los pepinos tendrán un sabor amargo. <br/> <br/>
                                Por lo tanto, mantenga el suelo húmedo especialmente durante los períodos cálidos y riegue profundamente (por lo menos hasta 10 cm de profundidad), permitiendo que el suelo se seque parcialmente y vuelva a regar. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="img/seguir-plantando.png" className="card-img-top icono-arma-huerta" alt="..."/>
                            <div className="card-body text-start">
                                <h4 className="card-title">ontinúe Plantando</h4>
                                <h5 className="card-title">Una actividad sostenible</h5>
                                <p className="card-text">Una vez que coseche continúe plantando. En las zonas con inviernos más crudos, la cosecha se puede prolongar hasta el invierno, en zonas tropícales dependerá más de la temperatura a la que se encuentre. <br/><br/>
                                Opte por plantas de maduración rápida y en lo posible evite usar siempre la misma planta en la misma tierra. Cada planta tiene necesidades diferentes y absorbe diferentes nutrientes, si usa siempre las mismas plantas la tierra se degradará; por esta razón es importante la rotación de cultivos puede utilzar un orden como el siguiente: frutas, raices, hojas, flores.  
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="img/fertilizar.png" className="card-img-top icono-arma-huerta" alt="..."/>
                            <div className="card-body text-start">
                                <h4 className="card-title">Fertilización de la Huerta</h4>
                                <h5 className="card-title">Los cuidados básicos</h5>
                                <p className="card-text">Mantenga el crecimiento vigoroso de los vegetales de maduración tardía, aplicando fertilizante con nitrógeno en forma esporádica. <br/><br/>
                                No fertilice en exceso las plantas que ya están produciendo, debido a que provoca que algunas hortalizas, en especial los tomates, dejen de producir. En lo posible utilice fertilizantes naturales, abono orgánico proveniente del compost o de la vermicomposta 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="img/insecto.png" className="card-img-top icono-arma-huerta" alt="..."/>
                            <div className="card-body text-start">
                                <h4 className="card-title">Controle los Insectos</h4>
                                <h5 className="card-title">Las plagas y sus peligros</h5>
                                <p className="card-text">
                                Vigile de cerca el control de plagas de insectos. Si existen algunos, puede sacarlos con la mano y así eliminar los (píselas o vierta a un tarro de agua jabonosa) gusanos picudos del tomate, escarabajos del pepino y saltamontes, son algunos de ellos. Si el problema persiste, vea la posibilidad de aplicar una solución que pueda usarse en hortalizas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="img/proteger.png" className="card-img-top icono-arma-huerta" alt="..."/>
                            <div className="card-body text-start">
                                <h4 className="card-title">Utilice Protectores para Extender la Estación</h4>
                                <h5 className="card-title">Acerca del climas</h5>
                                <p className="card-text">En zonas de estaciones cortas donde las heladas pueden producirse en cualquier momento, es bueno proteger las plantas con cubiertas flotantes. Éstas, disponibles en viveros y centros de jardinería, están confeccionadas con un género ligero que transmite la luz y el agua, pero que atrapa el calor para acelerar la maduración y proteger del frío.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="img/siembra-frecuente.png" className="card-img-top icono-arma-huerta" alt="..."/>
                            <div className="card-body text-start">
                                <h4
                                className="card-title">Coseche con Frecuencia</h4>
                                <h5 className="card-title">Cultivar y cosechar</h5>
                                <p className="card-text">Visite el jardín como mínimo día por medio para cosechar las hortalizas maduras. La mayoría de las plantas de hortalizas dejan de producir si no se cultivan con frecuencia. 
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
    