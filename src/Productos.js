import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import img_lechuga from './img/lechuga.jpg';
import img_manzana from './img/manzanas.jpg';
import img_zanahoria from './img/zanahoria.jpg';
import img_semillas from './img/semillas.jpg';
import img_tierra from './img/tierra.jpg';

import ListadoProd from './components/ListadoProductos.js';
import MenuSuperior from './components/MenuSuperior.js';
import PiePagina from './components/PiePagina';

const productos=[
  {nombre: "manzanas", precio:"1000", imagen:img_manzana, cat:""},
  {nombre: "zanahoria", precio:"1000", imagen:img_zanahoria, cat:""},
  {nombre: "semillas", precio:"1500", imagen:img_semillas, cat:""},
  {nombre: "tierra", precio:"3200", imagen:img_tierra, cat:""},
  {nombre: "lechuga", precio:"800", imagen:img_lechuga, cat:""},
]


function MostrarProductos() {
  return (
    <div>
		<MenuSuperior />		
		
    <div className="container">
      <div className="row">
        <h1>Productos</h1>
      </div>
      <ListadoProd prods={productos} />
    </div>
    <PiePagina />
    </div>
  );
}

export default MostrarProductos;
