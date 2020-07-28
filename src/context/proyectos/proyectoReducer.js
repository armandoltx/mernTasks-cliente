// el reducer contiene las funciones que van a interactuar con el state
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
} from '../../types';


// dentro del switch estan los types que ejecuta dispatch para cambiar el state.
export default (state, action) => {
  switch(action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true
      }
    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload
      }
    case AGREGAR_PROYECTO:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        // como proyectos es un array hacemos copia del array de los proyectos y le agregamos el nuevo proyecto
        // utilizando el action payload.
        formulario: false // para guardar el formulario y no poder agregar mas.
      }
    default:
      return state;
  }
}
