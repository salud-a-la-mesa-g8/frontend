import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const MenuSuperior = () => {
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
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" to="/">
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
									Asesoria Nutricional
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/organicos">									
									Orgánicos
								</Link>
							</li>
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
							<li className="nav-item dropdown d-none">
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
										<a className="dropdown-item" href="!#">
											Noticias
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="!#">
											Construye tu huerta
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="!#">
											Tips y recetas
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="!#">
											Orgánicos
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="!#">
											Cambiar el password
										</a>
									</li>
								</ul>
							</li>
						</ul>
						<form className="d-flex">
							<input
								className="form-control form-control-sm me-2"
								type="search"
								placeholder="texto a buscar"
								aria-label="Search"
							/>
							<button className="btn btn-sm btn-outline-light" type="submit">
								Buscar
							</button>
						</form>
					</div>
				</div>
			</nav>

			<div
				className="modal fade"
				id="ingresar"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Ingresar o registrarse
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
										className="nav-link active"
										data-bs-toggle="tab"
										href="#TabIngreso"
									>
										Ingresar
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										data-bs-toggle="tab"
										href="#TabRegistro"
									>
										Registrarse
									</a>
								</li>
							</ul>
							<div id="myTabContent" className="tab-content">
								{/* pestaña ingresar */}
								<div className="tab-pane fade active show" id="TabIngreso">
									<form>
										<div className="my-2">
											<label htmlFor="IngresoCelular" className="form-label">
												Celular
											</label>
											<input
												type="texto"
												className="form-control"
												id="IngresoCelular"
												maxLength="10"
											/>
											<div id="IngresoCelularHelp" className="form-text">
												Ingresa tu número celular (10 números)
											</div>
										</div>
										<label htmlFor="IngresoPass" className="form-label">
											Password
										</label>
										<div className="input-group mb-1">
											<input
												type="password"
												className="form-control"
												id="IngresoPass"
												maxLength="15"
											/>
											<span className="input-group-text" id="basic-addon1">
												<FontAwesomeIcon icon={faEye} />
											</span>
										</div>
										<div id="IngresoPassHelp" className="form-text mb-2">
											Ingresa tu password (máx 15 caractéres)
										</div>
										<button type="submit" className="btn btn-sm btn-primary">
											Guardar información
										</button>
									</form>
								</div>
								{/* pestaña registro */}
								<div className="tab-pane fade" id="TabRegistro">
									<form>
										<div className="my-2">
											<label htmlFor="RegistroNombre" className="form-label">
												Nombre completo
											</label>
											<input
												type="texto"
												className="form-control"
												id="RegistroNombre"
												maxLength="100"
											/>
											<div id="RegistroNombreHelp" className="form-text">
												Regitra tu nombre completo (máx 100 caractéres)
											</div>
										</div>
										<div className="my-1">
											<label htmlFor="RegitroCorreo" className="form-label">
												Correo electrónico
											</label>
											<input
												type="email"
												className="form-control"
												id="RegitroCorreo"
												maxLength="100"
											/>
											<div id="RegitroCorreosHelp" className="form-text">
												Regitra tu correo electrónico (máx 100 caractéres)
											</div>
										</div>
										<div className="my-1">
											<label htmlFor="RegitroCelular" className="form-label">
												Celular
											</label>
											<input
												type="texto"
												className="form-control"
												id="RegitroCelular"
												maxLength="10"
											/>
											<div id="RegitroCelularHelp" className="form-text">
												Regitra tu número celular (10 números)
											</div>
										</div>
										<label htmlFor="RegitroPass" className="form-label">
											Password
										</label>
										<div className="input-group mb-1">
											<input
												type="password"
												className="form-control"
												id="RegitroPass"
												maxLength="15"
											/>
											<span className="input-group-text" id="basic-addon1">
												<FontAwesomeIcon icon={faEye} />
											</span>
										</div>
										<div id="RegitroPassHelp" className="form-text mb-2">
											Registra tu password (máx 15 caractéres)
										</div>
										<button type="submit" className="btn btn-sm btn-primary">
											Guardar información
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
		</>
	);
};

export default MenuSuperior;
