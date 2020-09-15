import React, { useContext } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Tarea = ({ tarea }) => {
  // Extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const{ proyecto } = proyectosContext;

  // extraer el proyecto (destructuring)
  // como es array destructuring ira cogiendo posicion 0, 1, 2,.... a la vez q los vas utilizando
  const [proyectoActual] = proyecto;

  // Extraer el state de las tareas del proyecto
  const tareasContext = useContext(tareaContext);
  const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareasContext;

  // Funcion q se ejecuta cuando el usuario presiona btn de eliminar tarea
  const tareaEliminar = id => {
    eliminarTarea(id); // elimina las tareas
    obtenerTareas(proyectoActual.id); // para renderizar las tareas de nuevo.
  }

  // Funcion que modifica el estado de las tareas
  const cambiarEstado = tarea => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    cambiarEstadoTarea(tarea);
  }

  // Agrega la tarea actual cuando el usuario desea editarla
  const seleccionarTarea = tarea => {
    guardarTareaActual(tarea);
   }


  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>

      <div className="estado">
        {tarea.estado
        ?
          (
            <button
              type="button"
              className="completo"
              onClick={() => cambiarEstado(tarea)}
            >
              Completo
            </button>
          )
        :
            (
              <button
                type="button"
                className="incompleto"
                onClick={() => cambiarEstado(tarea)} // tiene q sera arrow function para poder pasarle la tarea.
              >
                InCompleto
              </button>
            )
        }
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => seleccionarTarea(tarea)}
        >Editar</button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => tareaEliminar(tarea.id)}
        >Eliminar</button>
      </div>
    </li>
  );
};

export default Tarea;