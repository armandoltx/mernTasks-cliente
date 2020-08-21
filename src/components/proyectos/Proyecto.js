import React, {useContext, useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {
  // Obtener el state y funciones del Proyecto
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  // Obtener el state y funciones de tarea
  const tareasContext = useContext(tareaContext);
  const { obtenerTareas } = tareasContext;

  // Funcion para agregar el proyecto actual
  const seleccionarProyecto = id => {
    proyectoActual(id); // Para acceder al proyecto actual
    obtenerTareas(id); // Filtrar las tareas cuando se de click
  }

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={ () => (seleccionarProyecto(proyecto.id)) }
      >{proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;