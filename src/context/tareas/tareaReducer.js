import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
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
        tareas: [action.payload, ...state.tareas], // creamos un arreglo con las tareas q tenemos mas la nueva tarea.
        // 1 creamos la tarea y luego renderizamos las demas, para que se vea la ultima tarea al ppo.
        errortarea: false
      }

    case VALIDAR_TAREA:
      return {
        ...state,
        errortarea: true

      }

    case ELIMINAR_TAREA:
      return {
        ...state,
        tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
      }

    case ESTADO_TAREA:
      return {
        ...state,
        tareas: state.tareasproyecto.map(tarea => tarea.id === action.payload.id ? action.payload : tarea)
      }

    case TAREA_ACTUAL:
      return {
        ...state,
        tareaseleccionada: action.payload
      }

    default:
      return state;
  }
}