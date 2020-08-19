// el reducer contiene las funciones que van a interactuar con el state
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
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
        formulario: false, // para guardar el formulario y no poder agregar mas.
        errorformulario: false // para "resetear el valor"
      }
    case VALIDAR_FORMULARIO:
      return {
        ...state,
        errorformulario: true,
      }
    case PROYECTO_ACTUAL:
      return {
        ...state,
        // el proyecto a ensenar es el proyecto donde demos click en el sidebar, como tenemos los proyectos por id y podemos acceder a ellos desde el sidebar utilizando un filter.
        proyecto: state.proyectos.filter(proyecto => proyecto.id === action.payload)
      }
    case ELIMINAR_PROYECTO:
      return {
        ...state,
        proyectos: state.proyectos.filter(proyecto => proyecto.id !== action.payload),
        // al eliminar lo que queremos es traer todos los proyesctos excepto el que tiene esa id, por eso !==
        proyecto: null // para cuando se borre un proyecto no se ensene el form de tareas ni el listado de tareas
      }

    default:
      return state;
  }
}
