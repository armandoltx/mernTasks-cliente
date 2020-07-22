// se definen el != state y las funciones funciones con dispatch hacia los types


import React, { useReducer } from 'react';

import proyectoContext from './proyectoContext'; // importamos el context
import proyectoReducer from './proyectoReducer';

const ProyectoState = props => {
  // este es el state inicial de la administracion del proyecto (creacion de proyecto, eliminacion ...)
  const initialState = { // definimos el state inicial, q siempre sera un objeto
    formulario: false
  }

  // Dispatch para ejecutar las acciones
  // usar useReducer es similar a usar useState; retorna el state y las funciones de dispatch
  // extraemos de useReducer tanto el state como el dispatch; dispatch es el q ejecuta los types en el reducer para cambiar el state
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  // Serie de funciones para el CRUD

  // desde proyectoContext.Provider nacen los datos para q le pasemos todos los datos a los componentes hijos usamos props.children
  return (
    <proyectoContext.Provider
      value={{
        formulario: state.formulario,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  )
}

export default ProyectoState;