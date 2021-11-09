import React from 'react'
  
  function CartaGenerica(props) {
    return (
      <div className="col-12 col-md-4 col-lg-3 justify-content-center">
             {/* Prueba tarjeta */}
             <div className="card my-1" style={{width: "18rem"}}>
              <img className="img" src={props.imagen} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">{props.nombre}</h5>
                <p className="card-text text-center">$ {props.precio}</p>
              </div>
           </div>
        </div>
    );
  }
  
  function TheApp(props) {
    const producto = props.prods;
    //const listItems = producto.map((item) => <li key={d.nombre}>{d.nombre}</li>);
  
    const listItems = producto.map((item) =>
      <CartaGenerica key={item.nombre} nombre={item.nombre} imagen={item.imagen} precio={item.precio} />
    );
    return (
      <div className="Container">
        <div className="row justify-content-center">
          {listItems}
        </div>
      </div>
    );
  }

  export default TheApp;