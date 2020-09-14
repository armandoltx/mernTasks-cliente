import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const ListadoTareas = () => {

  // Extraer el state proyectos para el nombre
  const proyectosContext = useContext(proyectoContext);
  const{ proyecto, eliminarProyecto } = proyectosContext;

  // Extraer el state de las tareas del proyecto
  const tareasContext = useContext(tareaContext);
  const { tareasproyecto } = tareasContext;

  // Si no hay proyecto seleccionado, pq la 1 vez no hay proyecto seleccionado
  if(!proyecto) return <h2>Selecciona un Proyecto</h2>

  // Array destructuring para extraer el proyecto actual
  // extraemos la posicion cero
  const [proyectoActual] = proyecto

  // Elimina un proyecto
  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  }

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasproyecto.length === 0
          ? <li className="tarea">No Hay Tareas.</li>
          :
          <TransitionGroup>
            {tareasproyecto.map(tarea => (
              <CSSTransition
                key={tarea.id}
                timeout={200}
                classNames="tarea"
              >
                <Tarea
                  tarea={tarea}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        }
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickEliminar}
      >Eliminar Proyecto</button>
    </Fragment>
  );
};

export default ListadoTareas;