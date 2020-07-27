// el reducer contiene las funciones que van a interactuar con el state
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from '../../types';
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
    default:
      return state;
  }
}
