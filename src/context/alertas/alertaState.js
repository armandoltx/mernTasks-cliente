import React, { useReducer } from 'react';
import alertaContext from './alertaContext';
import alertaReducer from './alertaReducer';

import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types';


const AlertaState = props => {
  const initialState = {
    alerta: null
  }

  // Dispatch para ejecutar las acciones
  // usar useReducer es similar a usar useState; retorna el state y las funciones de dispatch
  // extraemos de useReducer tanto el state como el dispatch; dispatch es el q ejecuta los types en el reducer para cambiar el state
  const[state, dispatch] = useReducer(alertaReducer, initialState);

  // Funciones

  const mostrarAlerta = (msg, categoria) => {
    dispatch({
      type: MOSTRAR_ALERTA,
      payload: {
        msg,
        categoria
      }
    });

    setTimeout(() => {
      dispatch({
        type: OCULTAR_ALERTA
      })
    }, 5000);
  }

  return (
    <alertaContext.Provider
      value={{
        alerta: state.alerta,
        mostrarAlerta

      }}
    >
      {props.children}
    </alertaContext.Provider>
  )
}

export default AlertaState;