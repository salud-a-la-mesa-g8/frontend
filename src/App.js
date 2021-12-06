import React from 'react'
import InicioSitio from './components/InicioSitio'
import MenuSuperior from './components/MenuSuperior'
import Noticias from './components/Noticias'
import Organicos from './components/Organicos'
import AsesoriaNutricional from './components/AsesoriaNutricional'
import TuHuerta from './components/TuHuerta'
import TuHuertaPrivate  from './components/TuHuertaPrivate'


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
        <Route exact path="recetas" element={<AsesoriaNutricional />} />
        <Route exact path="tuhuerta" element={<TuHuerta />} /> 
        <Route exact path="tuhuertaprivate" element={<TuHuertaPrivate/>} />
        

      </Routes>
    </BrowserRouter>
                                       
  );
}

export default App;
