import React from 'react';
import { Link } from 'react-router-dom';
const Links = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/'> Indice </Link></li>
          <li><Link to='/perfil'> Perfil </Link></li>
          <li><Link to='/ingreso'> Ingreso </Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Links;
