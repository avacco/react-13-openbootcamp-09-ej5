import {React,useEffect,useState} from 'react';

const Indice = () => {

  
  const [data, setData] = useState('Invitado');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('credenciales'));
    const logged = JSON.parse(localStorage.getItem('logged'));

    if (data && logged) {
     setData(data.username);
    }
  }, []);
  
  return (
    <div>
      <h1>Hola {data}</h1>
      <h2>Pagina de Indice</h2>
    </div>
  );
}

export default Indice;
