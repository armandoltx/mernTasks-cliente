import React, { useReducer } from 'react';
import tareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import { TAREAS_PROYECTO } from '../../types/index';

const TareaState = props => {
  // siempre el state inicial va a ser un objeto
  const initialState = {
    tareas: [
      { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
      { nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
      { nombre: 'Elegir Plataformas de Pago', estado: false, proyectoId: 3 },
      { nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
      { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
      { nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
      { nombre: 'Elegir Plataformas de Pago', estado: false, proyectoId: 3 },
      { nombre: 'Elegir Plataforma', estado: true, proyectoId: 4 },
      { nombre: 'Elegir Colores', estado: false, proyectoId: 1 },
      { nombre: 'Elegir Plataformas de Pago', estado: false, proyectoId: 2 },
      { nombre: 'Elegir Plataforma', estado: true, proyectoId: 3 },
      { nombre: 'Elegir Colores', estado: false, proyectoId: 4 },
      { nombre: 'Elegir Plataformas de Pago', estado: false, proyectoId: 3 },
    ],
    tareasproyecto: null // al inicio no va a haber ninguna tarea, el usuario tiene q seleccionar alguna tarea
  }

  // Crear Dispatch y State
  // Dispatch para ejecutar las acciones
  // usar useReducer es similar a usar useState; retorna el state y las funciones de dispatch
  // extraemos de useReducer tanto el state como el dispatch; dispatch es el q ejecuta los types en el reducer para cambiar el state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  // CREAR LAS FUNCIONES

  // Obtener las tareas de un proyecto
  const obtenerTareas = proyectoId => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    })
  }


  return(
    <tareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        obtenerTareas,
      }}
    >
      {props.children}
    </tareaContext.Provider>
  )
}

export default TareaState;