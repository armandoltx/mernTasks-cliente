import React, { useReducer } from 'react';
import tareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA
} from '../../types/index';

const TareaState = props => {
  // siempre el state inicial va a ser un objeto
  const initialState = {
    tareas: [
      { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
      { id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
      { id: 3, nombre: 'Elegir Plataformas de Pago', estado: false, proyectoId: 3 },
      { id: 4, nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
      { id: 5, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
      { id: 6, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
      { id: 7, nombre: 'Elegir Plataformas de Pago', estado: false, proyectoId: 3 },
      { id: 8, nombre: 'Elegir Plataforma', estado: true, proyectoId: 4 },
      { id: 9, nombre: 'Elegir Colores', estado: false, proyectoId: 1 },
      { id: 10, nombre: 'Elegir Plataformas de Pago', estado: false, proyectoId: 2 },
      { id: 11, nombre: 'Elegir Plataforma', estado: true, proyectoId: 3 },
      { id: 12, nombre: 'Elegir Colores', estado: false, proyectoId: 4 },
      { id: 13, nombre: 'Elegir Plataformas de Pago', estado: false, proyectoId: 3 },
    ],
    tareasproyecto: null, // al inicio no va a haber ninguna tarea, el usuario tiene q seleccionar alguna tarea
    errortarea: false,
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

  // Agregar la Tarea al proyecto seleccionado
  const agregarTarea = tarea => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    })
  }

  // Validar la tarea y muestar un error en caso de q sea necesario
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    })
  }

  // Eliminar la tarea por id
  const eliminarTarea = id => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id
    })
  }

  // Cambiar el estado de cada tarea (completo incompleto).
  const cambiarEstadoTarea = tarea => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea
    })
  }


  return(
    <tareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
      }}
    >
      {props.children}
    </tareaContext.Provider>
  )
}

export default TareaState;