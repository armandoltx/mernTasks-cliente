// se definen los != state y las funciones funciones con dispatch hacia los types


import React, { useReducer } from 'react';

import proyectoContext from './proyectoContext'; // importamos el context
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO } from '../../types';

const ProyectoState = props => {
  // este es el state inicial de la administracion del proyecto (creacion de proyecto, eliminacion ...)
  const initialState = { // definimos el state inicial, q siempre sera un objeto
    proyectos: [
      { id: 1, nombre: 'Tienda Virtual' },
      { id: 2, nombre: 'Intranet' },
      { id: 3, nombre: 'Sitio Web' },
      { id: 4, nombre: 'MERN' },
    ],
    formulario: false
  }

  // Dispatch para ejecutar las acciones
  // usar useReducer es similar a usar useState; retorna el state y las funciones de dispatch
  // extraemos de useReducer tanto el state como el dispatch; dispatch es el q ejecuta los types en el reducer para cambiar el state
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  // Serie de funciones para el CRUD
  const mostrarFormulario = () => {
    // aqui la importanci de dispatch porque le vamos a evaluar el type y va a estar atado al switch q cambia el state.
    // el state se cambia en el reducer, aqui solo se escriben las funciones q mandan a llamar al reducer.
    // cuando se ejecuta esta funcion se ejecuta el type FORMULARIO_PROYECTO.
    dispatch({
      type: FORMULARIO_PROYECTO
    })
  }

  // desde proyectoContext.Provider nacen los datos para q le pasemos todos los datos a los componentes hijos usamos props.children
  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        mostrarFormulario,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  )
}

export default ProyectoState;