import React, { useContext } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {

  // Extraer el state si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const{ proyecto } = proyectosContext;

  // Si no hay proyecto seleccionado, pq la 1 vez no hay proyecto seleccionado
  if(!proyecto) return null;

  // Array destructuring para extraer el proyecto actual
  // extraemos la posicion cero
  const [proyectoActual] = proyecto

  return (
    <div className="formulario">
      <div className="contenedor-input">
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Tarea"
          name="nombre"
        />
      </div>

      <div className="formulario">
        <input
          type="submit"
          className="btn btn-primario btn-submit btn-block"
          value="Agregar Tarea"
        />
      </div>
    </div>
  );
};

export default FormTarea;