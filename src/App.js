import React from 'react'
import InicioSitio from './components/InicioSitio'
import MenuSuperior from './components/MenuSuperior'
import Noticias from './components/Noticias'
import Organicos from './components/Organicos'
import Recetas from './components/AsesoriaNutricional'
import TuHuerta from './components/TuHuerta'
import PiePagina from "./components/PiePagina";
import AdminHuerta from './components/AdminHuerta'
import AdminNoticias from './components/AdminNoticias'
import AdminOrganicos from './components/AdminOrganicos'
import AdminRecetas from './components/AdminRecetas'
import AdminUsuarios from './components/AdminUsuarios'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <MenuSuperior/>
      
      <Routes>
        <Route exact path="/" element={<InicioSitio />} />
        <Route exact path="noticias" element={<Noticias />} />
        <Route exact path="organicos" element={<Organicos />}  />
        <Route exact path="recetas" element={<Recetas />} />
        <Route exact path="tuhuerta" element={<TuHuerta />} />
        <Route exact path="adminhuerta" element={<AdminHuerta />} />
        <Route exact path="adminnoticias" element={<AdminNoticias />} />
        <Route exact path="adminorganicos" element={<AdminOrganicos />} />
        <Route exact path="adminrecetas" element={<AdminRecetas />} />
        <Route exact path="adminusuarios" element={<AdminUsuarios />} />
      </Routes>

      <PiePagina />
    </BrowserRouter>
                                       
  );
}

export default App;
