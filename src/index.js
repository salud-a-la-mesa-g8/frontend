import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// componenentes
import MenuSuperior from "./components/MenuSuperior";
import PiePagina from "./components/PiePagina";
import InicioSitio from "./components/InicioSitio";
ReactDOM.render(
  <React.StrictMode>
   <MenuSuperior />		
    <InicioSitio />
		<PiePagina />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
