import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import clienteAxios from '../../config/axios';

import { REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION } from '../../types';


const AuthState = props => {

  const initialState = {
    token: localStorage.getItem('token'),
    autenticado: null,
    usuario: null,
    mensaje: null
  }

  // Dispatch para ejecutar las acciones
  // usar useReducer es similar a usar useState; retorna el state y las funciones de dispatch
  // extraemos de useReducer tanto el state como el dispatch; dispatch es el q ejecuta los types en el reducer para cambiar el state
  const [ state, dispatch ] = useReducer(AuthReducer, initialState);

  // FUNCIONES

  // Registrar usuario
  const registrarUsuario = async datos => {
    try {
      const respuesta = await clienteAxios.post('/api/usuarios', datos);
      console.log("respuesta ", respuesta);

      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.datos
      })
    } catch (error) { // puede pasar q queramos registrar a un usuario q ya esta registrado.
      console.log(error);

      dispatch({
        type: REGISTRO_ERROR
      })
    }
  }

  return(
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        registrarUsuario,

      }}
    >
    {props.children}
    </AuthContext.Provider>

  )

}
export default AuthState;