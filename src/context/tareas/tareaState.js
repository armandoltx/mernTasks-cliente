import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

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
  }

  // Crear Dispatch y State
  // Dispatch para ejecutar las acciones
  // usar useReducer es similar a usar useState; retorna el state y las funciones de dispatch
  // extraemos de useReducer tanto el state como el dispatch; dispatch es el q ejecuta los types en el reducer para cambiar el state
  const [state, dispatch] = useReducer(TareaReducer, initialState);


  return(
    <TareaContext.Provider
      value={{
        tareas: state.tareas
      }}
    >
      {props.children}
    </TareaContext.Provider>
  )
}

export default TareaState;