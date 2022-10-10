import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Registro = () => {
  
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm:  ''
  }

  const registerSchema = Yup.object().shape(
    {
      username: Yup.string()
        .min(6, 'El usuario debe tener un miínimo de 6 caracteres.')
        .max(12, 'El usuario debe tener un máximo de 12 caracteres.')
        .required('Se requiere de un usuario.'),
      email: Yup.string()
        .email('Formato de correo inválido.')
        .required('Se requiere un correo.'),
      password: Yup.string()
        .min(8, 'La contraseña debe tener un mínimo de 8 caracteres.')
        .required('Se requiere una contraseña.'),
      confirm: Yup.string()
        .when('password', { 
          is: value => (value && value.length > 0 ? true : false),
          then: Yup.string()
            .oneOf(
            [Yup.ref('password')],
            'Las contraseñas deben coincidir.'
          ) 
        }).required('Confirma la contraseña.')
    }
  );

  return (
    <div>
      <h4>Registro Formik</h4>
      <Formik
        initialValues = {initialValues}
        validationSchema= {registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          await localStorage.setItem('credenciales',JSON.stringify(values, null, 2));
        }}
      >

        {({touched,errors}) => (
                <Form>
                  <label htmlFor='username'>Usuario: </label>
                  <Field id='username' type='text' name='username' placeholder='Usuario'/>

                    {/* Error de correo */}
                  {
                    errors.username && touched.username && 
                    (
                      <ErrorMessage name='username' component='div'/>
                    )
                  }
<br/>
                  <label htmlFor='email'>Correo: </label>
                  <Field id='email' type='email' name='email' placeholder='tucorreo@dominio.com'/>

                  {/* Error de correo */}
                  {
                    errors.email && touched.email && 
                    (
                      <ErrorMessage name='email' component='div'/>
                    )
                  }
<br/>
                  <label htmlFor='password'>Contraseña: </label>
                  <Field id='password' type='password' name='password' placeholder='Contraseña' />
                  
                  {/* Error de password */}
                  {
                    errors.password && touched.password && 
                    (
                      <div>
                        <ErrorMessage name='password'/>
                      </div>
                    )
                  }
<br/>
                  <label htmlFor='confirm'>Confirmar contraseña: </label>
                  <Field id='confirm' type='password' name='confirm' placeholder='Confirmar contraseña' />
                  
                  {/* Error de confirmación */}
                  {
                    errors.confirm && touched.confirm && 
                    (
                      <div>
                        <ErrorMessage name='confirm'/>
                      </div>
                    )
                  }
<br/>
                  <button type='submit'>Registrar cuenta</button>

                </Form>
              )}

      </Formik>
    </div>
  );
}

export default Registro;
