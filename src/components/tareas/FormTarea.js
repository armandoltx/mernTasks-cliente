import React, { useContext, useState } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

  // Extraer el state si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const{ proyecto } = proyectosContext;

  // Obtener la funcion del context de Tarea
  const tareasContext = useContext(tareaContext);
  const { errortarea, agregarTarea, validarTarea, obtenerTareas } = tareasContext;

  // state del formulario
  const [ tarea, guardarTarea ] = useState({
    nombre: '',
  });

  // Extraer el Nombre de la tarea
  const { nombre } = tarea;

  // Si no hay proyecto seleccionado, pq la 1 vez no hay proyecto seleccionado
  if(!proyecto) return null;

  // Array destructuring para extraer el proyecto actual
  // extraemos la posicion cero
  const [proyectoActual] = proyecto

  // Leer los valores del formulario
  const handleChange = e => {
    guardarTarea({
      ...tarea,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();

    // validar
    if(nombre.trim() === '') {
      validarTarea();
      return;
    }

    // pasar la validacion
    // agregamos 'errortarea: false' en el reducer en caso de AGREGAR_TAREA y pasara la validacion si esta completo.

    // agregar la nueva tarea al state de tareas
    // necesitamos saber el proyecto en el q agregar la tarea, usamos proyectoId, como tenemos el proyecto actual lo usamos
    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false;
    agregarTarea(tarea);

    // primero agregamos la tarea nueva ^^^^, luego volvemos a fitrar y obtener las tareas otra vez !!

    // Obtener y filtrar las tareas del proyecto actual
    obtenerTareas(proyectoActual.id);

    // reiniciar el form  ==> Usamos el state del formulario
    guardarTarea({
      nombre: ''
    })
  }

  return (
    <div className="formulario">
      <form
        onSubmit={onSubmit}
      >
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>

      { errortarea ? <p className="mensaje error">El nombre de la tarea es obilgatorio.</p>: null }
    </div>
  );
};

export default FormTarea;