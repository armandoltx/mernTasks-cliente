// se definen los != state y las funciones funciones con dispatch hacia los types


import React, { useReducer } from 'react';

import uuid, { v4 as uuidv4 } from 'uuid';


import proyectoContext from './proyectoContext'; // importamos el context
import proyectoReducer from './proyectoReducer';
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
} from '../../types';

const ProyectoState = props => {

  const proyectos = [ // lo normal es q vengan de una base de datos
    { id: 1, nombre: 'Tienda Virtual' },
    { id: 2, nombre: 'Intranet' },
    { id: 3, nombre: 'Sitio Web' },
    { id: 4, nombre: 'MERN' },
  ]


  // este es el state inicial de la administracion del proyecto (creacion de proyecto, eliminacion ...)
  const initialState = { // definimos el state inicial, q siempre sera un objeto
    proyectos: [],
    formulario: false,
    errorformulario: false,
  }

  // Dispatch para ejecutar las acciones
  // usar useReducer es similar a usar useState; retorna el state y las funciones de dispatch
  // extraemos de useReducer tanto el state como el dispatch; dispatch es el q ejecuta los types en el reducer para cambiar el state
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  // Serie de funciones para el CRUD
  //============ CRUD ==============
  //
  const mostrarFormulario = () => {
    // aqui la importancia de dispatch porque le vamos a evaluar el type y va a estar atado al switch q cambia el state.
    // el state se cambia en el reducer, aqui solo se escriben las funciones q mandan a llamar al reducer.
    // cuando se ejecuta esta funcion se ejecuta el type FORMULARIO_PROYECTO.
    dispatch({
      type: FORMULARIO_PROYECTO
    })
  }

  // Obtener los proyectos
  // lo q tome la funcion como parametro siempre sera el payload. El payload es lo q cambia el state.
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos
    })
  }

  //Agregar Nuevo Proyecto
  const agregarProyecto = proyecto => {
    //pasamos el proyecto como parametro, le agregamos un id y lo pasamos como dispatch para cambiar el state
    // 1. agregamos el id
    proyecto.id = uuidv4();

    // 2. Insertamoes el proyecto en el state
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto
    })
  }

  // Validar Formulario por errores
  const mostrarError = () => {
    // no le pasamos ningun parametro, pq cuando se llame mostrara un error, pasara de ser false a true
    dispatch({
      type: VALIDAR_FORMULARIO,
    })

  }

  //=======   END CRUD ========

  // desde proyectoContext.Provider nacen los datos para q le pasemos todos los datos a los componentes hijos usamos props.children
  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  )
}

export default ProyectoState;