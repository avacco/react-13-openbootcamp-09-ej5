import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
const loginSchema = Yup.object().shape(
  {
    email: Yup.string().email('Formato inválido').required('Es necesario una dirección de correo'),
    password: Yup.string().required('Requiere una contraseña')
  }
);


const Ingreso = () => {

  const credencialesIniciales = {
    email: '',
    password: ''
  }

  const navigate = useNavigate();

  return (
    <div>
      <h1>Formulario de ingreso</h1>
      <Formik
      initialValues={ credencialesIniciales }
      validationSchema={ loginSchema }
      onSubmit={ async (values) => {
          let data = JSON.parse(localStorage.getItem('credenciales'));
          if(data.email === values.email && data.password === values.password){ // Compara los valores guardados en credenciales con los ingresados
            await new Promise((r) => setTimeout(r,100));
            await localStorage.setItem('logged',true); // Deja un item "logged" en el almacenamiento local, servira para el ejemplo.
            navigate('/');
          }else{
            alert('Datos inválidos');
          }
        }}
      >

        {({ touched, errors }) => (

          <Form>
            <label htmlFor='email'>Correo</label><br/>
            <Field id='email' name='email' placeholder='jane@acme.com' type='email' /><br/>
    
            {/* Error de correo */}
            {
              errors.email && touched.email && 
              (
                <ErrorMessage name='email' component='div'/>
              )
            }
            <br/><br/>
            <label htmlFor='password'>Contraseña</label><br/>
            <Field id='password' type='password' name='password' placeholder='Contraseña' /><br/>
    
            {/* Error de password */}
            {
              errors.password && touched.password && 
              (
                <div>
                  <ErrorMessage name='password'/>
                </div>
              )
            }

            <button type='submit'>Enviar</button>

          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Ingreso;
