import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
} from '../../types/index';

export default(state, action) => {
  switch(action.type) {
    case TAREAS_PROYECTO:
      return {
        ...state,
        tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
        // el payload viene de la funcion creada con dispatch en tareaState ==> obtenerTareas
      }

    case AGREGAR_TAREA:
      return {
        ...state,
        tareas: [...state.tareas, action.payload] // creamos un arreglo con las tareas q tenemos mas la nueva tarea.
      }

    default:
      return state;
  }
}