import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {MenuPrincipal} from "./MenuPrincipal";
import opciones from "./opciones.json";
import { MenuSecundario } from './MenuSecundario';
import listadoEmpresas from "./listadoEmpresas.json";
import listadoEventos from "./listadoEventos.json";
import listadoParticipantes from "./listadoParticipantes.json";
import { BotonPopUpEmpresas } from './BotonPopUpEmpresas';
import { BotonPopUpEventos } from './BotonPopUpEventos';
import { BotonPopUpParticipantes } from './BotonPopUpParticipantes';
import React, { useEffect, useState } from 'react';
import { ParrillaOpcionesEmpresas } from './ParrillaOpcionesEmpresas';
import { ParrillaOpcionesEventos } from './ParrillaOpcionesEventos';
import { BotonPopUpAnadirEmpresas } from './BotonPopUpAnadirEmpresas';




function App() {

  //const urlEmpresas = 'http://127.0.0.1:5000/empresas';

  const [empresa, setEmpresa] = React.useState(null);

  const [participante, setParticipante] = React.useState(null);

  const [evento, setEvento] = React.useState(null);


  React.useEffect(()=>{
    //console.log('use effect')
    obtenerDatosEmpresas()
    obtenerDatosEventos()
    obtenerDatosParticipantes()
  },[]);

  
  const obtenerDatosEmpresas = async () =>{
    const datos = await fetch('http://127.0.0.1:5000/empresas');
    const empresas = await datos.json();
    console.log(empresas)
    setEmpresa(empresas)
  }

  const obtenerDatosParticipantes = async () =>{
    const datos = await fetch('http://127.0.0.1:5000/participantes');
    const participantes = await datos.json();
    setParticipante(participantes)
  }
  
  const obtenerDatosEventos = async () =>{
    const datos = await fetch('http://127.0.0.1:5000/eventos');
    const eventos = await datos.json();
    setEvento(eventos)
  }


  



  return (
    <Router>
    <Routes>
        <Route path="/" element={<MenuPrincipal titulo="HermsAPP"  json={opciones}></MenuPrincipal>} exact>          
        </Route>
        <Route path="/menuEmpresas" element={<MenuSecundario titulo="Empresas" opciones={opciones} json={empresa} categoria={BotonPopUpEmpresas} categoriaAnadir={BotonPopUpAnadirEmpresas} tipoParrilla={ParrillaOpcionesEmpresas}></MenuSecundario>}>          
        </Route>
        <Route path="/menuEventos" element={<MenuSecundario titulo="Eventos" opciones={opciones} json={evento} categoria={BotonPopUpEventos} categoriaAnadir={BotonPopUpAnadirEmpresas} tipoParrilla={ParrillaOpcionesEventos}></MenuSecundario>}>          
        </Route>
        <Route path="/menuParticipantes" element={<MenuSecundario titulo="Participantes" opciones={opciones} json={participante} categoria={BotonPopUpParticipantes} categoriaAnadir={BotonPopUpAnadirEmpresas} tipoParrilla={ParrillaOpcionesEmpresas}></MenuSecundario>}>          
        </Route>
    </Routes>
</Router>
  );
}

export default App;
