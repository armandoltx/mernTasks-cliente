import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';


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

  return(
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje

      }}
    >
    {props.children}
    </AuthContext.Provider>

  )

}
export default AuthState;