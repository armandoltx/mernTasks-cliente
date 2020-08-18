import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';

import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTareas = () => {

  // Extraer el state proyectos para el nombre
  const proyectosContext = useContext(proyectoContext);
  const{ proyecto } = proyectosContext;

  // Si no hay proyecto seleccionado, pq la 1 vez no hay proyecto seleccionado
  if(!proyecto) return <h2>Selecciona un Proyecto</h2>

  // Array destructuring para extraer el proyecto actual
  // extraemos la posicion cero
  const [proyectoActual] = proyecto

  const tareasProyecto = [
    { nombre: 'Elegir Plataforma', estado: true },
    { nombre: 'Elegir Colores', estado: false },
    { nombre: 'Elegir Plataformas de Pago', estado: false },
    { nombre: 'Elegir Hosting', estado: true },
  ]

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0
          ? <li className="tarea"></li>
          : tareasProyecto.map(tarea => (
            <Tarea
              tarea={tarea}
            />
          ))
        }
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
      >Eliminar Proyecto</button>
    </Fragment>
  );
};

export default ListadoTareas;