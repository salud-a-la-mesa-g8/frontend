import React from "react";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import { cardPasos} from "./TuHuerta";


class CrudPasos extends React.Component {
  state = {
    cardPasos: cardPasos,
    modalActualizar: false,
    modalInsertar: false,
    form: {
        id: "",
        titulo: "",
        subtitulo: "",
        descripcion: "",
        descripcion2: "",
      },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.cardPasos;
    // eslint-disable-next-line array-callback-return
    arreglo.map((registro) =>{
      if (dato.id === registro.id) {
        arreglo[contador].titulo = dato.titulo;
        arreglo[contador].subtitulo = dato.subtitulo;
        arreglo[contador].descripcion = dato.descripcion;
        arreglo[contador].descripcion2 = dato.descripcion2;
      }
      contador++;
    });
    this.setState({ cardPasos: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el apartado "+dato.titulo);
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.cardPasos;
      // eslint-disable-next-line array-callback-return
      arreglo.map((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({cardPasos: arreglo, modalActualizar: false });
    }
  };


  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    var lista= this.state.cardPasos;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, cardPasos: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
        <Container>
        <br/> <br/>
        <br/> <br/>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Button color="light" onClick={()=>this.mostrarModalInsertar()}>Insertar nuevo apartado</Button>
        </div>
        
          <Table>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Sub-Titulo</th>
                <th>Descripción</th>
                <th>Descripción 2</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.cardPasos.map((dato) => (
                <tr>
                  <td>{dato.titulo}</td>
                  <td>{dato.subtitulo}</td>
                  <td>{dato.descripcion}</td>
                  <td>{dato.descripcion2}</td>
                  <td>
                   
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      <Button color="primary" onClick={() => this.mostrarModalActualizar(dato)} class="btn btn-primary me-md-2" type="button">Editar</Button>
                      <Button color="info"  onClick={()=> this.eliminar(dato)} class="btn btn-primary" type="button">Eliminar</Button>
                    </div>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Modal isOpen={this.state.modalActualizar}>
            <ModalHeader>
              <div>
                <h3>Editar apartado</h3>
              </div>
            </ModalHeader>

            <ModalBody>
            
              <FormGroup>
                <label>Titulo:</label>

                <input
                  className="form-control"
                  name="titulo"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.titulo}
                />
              </FormGroup>

              <FormGroup>
                <label>Sub-Titulo:</label>
                <input
                  className="form-control"
                  name="subtitulo"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.subtitulo}
                />
              </FormGroup>

              <FormGroup>
                <label>Descripción:</label>
                <input
                  className="form-control"
                  name="descripcion"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.descripcion}
                />
              </FormGroup>
              <FormGroup>
                <label>Descripción 2:</label>
                <input
                  className="form-control"
                  name="descripcion2"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.descripcion2}
                />
              </FormGroup>
            </ModalBody>

            <ModalFooter>
              <Button
                color="primary"
                onClick={() => this.editar(this.state.form)}
              >
                Editar
              </Button>
              <Button
                color="info"
                onClick={() => this.cerrarModalActualizar()}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader>
              <div>
                <h3>Insertar apartado</h3>
              </div>
            </ModalHeader>

            <ModalBody>
                  
              <FormGroup>
                <label>Titulo:</label>
                <input
                  className="form-control"
                  name="titulo"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>Sub-Titulo:</label>
                <input
                  className="form-control"
                  name="subtitulo"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>Descripción:</label>
                <input
                  className="form-control"
                  name="descripcion"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>Descripción2:</label>
                <input
                  className="form-control"
                  name="descripcion2"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </ModalBody>

            <ModalFooter>
              <Button color="primary" onClick={() => this.insertar()}>
                Insertar
              </Button>
              <Button 
                className="btn btn-info"
                onClick={() => this.cerrarModalInsertar()}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
        </Container>
      </>
    );
  }
}
export default CrudPasos;
