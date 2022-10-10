import './App.css';
import {React, useState, useEffect } from 'react';
import { Link, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Tareas from './components/Tareas';
import Ingreso from './components/Ingreso';
import NotFound from './components/NotFound';
import Indice from './components/Indice';
import Registro from './components/Registro';
import Salir from './components/Salir';

const Ruteo = () => {

  // No estaba tomando como true de la forma convencional, asi que tocó setear un booleano con useState que cambia de estado con useEffectç
  // --> Descubrí el por qué mas tarde, pero lo dejaré así porque funciona para el ejercicio.
  let [logged, setLogged] = useState(false);

  // Utiliza useLocation para actualizar los estados con useEffect cada vez que hay un cambio de localizacion
  // Esto parece altamente ineficiente, pero React es un dolor de cabeza de entender a primeras.
  const location = useLocation();  

  useEffect(() => {
    localStorage.getItem('logged') ? setLogged(true) : setLogged(false);
  }, [location]);
  

  return (
    <div className='App'>
      <header className="App-header">
          <nav>
            <ul>
              <li><Link to='/'> Indice </Link></li>
              { 
                logged ?
                <li><Link to='/tareas'> Tareas </Link></li>
                  :
                <li><Link to='/ingreso'> Ingreso </Link></li>
              }
              { 
                logged ?
                <li><Link to='/salir'> Salir </Link></li>
                  :
                <li><Link to='/registro'> Registro </Link></li>
              }
            </ul>
          </nav>

          <Routes>
            <Route path='/' element={ <Indice /> } />
            <Route path='/ingreso'  element={logged ? <Navigate   replace to='/'/>       : <Ingreso />} /> 
            <Route path='/tareas'   element={logged ? <Tareas/> : <Navigate   replace to='/ingreso'/>} /> 
            <Route path='/salir'    element={logged ? <Salir /> : <Navigate   replace to='/'/>} /> 
            <Route path='/registro' element={logged ? <Navigate   replace to='/ingreso'/> : <Registro />} /> 
              
            <Route path='*' element={ <NotFound /> } />
          </Routes>
        
      </header>
    </div>
  );
}

export default Ruteo;
