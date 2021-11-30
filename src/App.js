import React from 'react'
import InicioSitio from './components/InicioSitio'
import MenuSuperior from './components/MenuSuperior'
import Noticias from './components/Noticias'
import Organicos from './components/Organicos'
import AsesoriaNutricional from './components/AsesoriaNutricional'
import TuHuerta from './components/TuHuerta'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ListadoProductos from './components/ListadoProductos'

function App() {
  return (

    <BrowserRouter>
      <MenuSuperior/>
      <Routes>
        <Route exact path="/" element={<InicioSitio />} />
        <Route exact path="noticias" element={<Noticias />} />
        <Route exact path="organicos" element={<Organicos />}  />
        <Route exact path="recetas" element={<AsesoriaNutricional />} />
        <Route exact path="tuhuerta" element={<TuHuerta />} />
        <Route exact path="TablaOrganicos" element={<ListadoProductos />} />
      </Routes>
    </BrowserRouter>
                                       
  );
}

export default App;
