import React from 'react';
import { useNavigate } from 'react-router-dom';
const Salir = () => {

  const navigate = useNavigate();
  
  function salir(){
    localStorage.removeItem('logged'); // borra del almacenamiento el estado de logged, esto forzará un cambio en los estados de sesion en cuanto se navegue a la raiz de nuevo
    navigate('/');
  }

  function volver(){
    navigate(-1);
  }

  return (
    <div>
      <h1>Confirma si quieres cerrar sesión</h1>
      <button onClick={() => salir()}>Cerrar sesion</button>
      <button onClick={() => volver()}>Continuar sin cerrar sesion</button>
    </div>
  );
}

export default Salir;
