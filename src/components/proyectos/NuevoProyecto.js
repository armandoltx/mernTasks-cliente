import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

  //Obtener el state del Formulario
  // primero definimos el context asi podemos consumir el state formulario sin necesidad de pasarlo a lo largo del arbol de componentes. Hay q pasar el context como parametro para acceder a el.
  const proyectosContext = useContext(proyectoContext);
  // ahora accedemos al state y a "formulario"
  const { formulario } = proyectosContext;

  // state para Proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: ''
  });

  // Extraer nombre de proyecto
  const { nombre } = proyecto;

  // Lee los contenidos del input
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value
    })
  }

  // Cuando el usuario envia un proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();
    // Validar el proyecto
    //Agregarlo al state
    //Reiniciar el form
  }


  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
      >Nuevo Proyecto</button>

      {formulario ?
        (
          <form
            className="formulario-nuevo-proyecto"
            onSubmit={onSubmitProyecto}
          >
            <input
              type="text"
              className="input-text"
              placeholder="Nombre Proyecto"
              name="nombre"
              value={nombre}
              onChange={onChangeProyecto}
              />

            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Agregar Proyecto"
            />
          </form>
        ) : null
      }
    </Fragment>

  );
};

export default NuevoProyecto;