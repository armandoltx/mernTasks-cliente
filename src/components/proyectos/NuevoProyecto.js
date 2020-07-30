import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

  //Obtener el state del Formulario
  // primero definimos el context asi podemos consumir el state formulario sin necesidad de pasarlo a lo largo del arbol de componentes. Hay q pasar el context como parametro para acceder a el.
  const proyectosContext = useContext(proyectoContext);
  // ahora accedemos al state y a "formulario" y a todo lo q este en el context
  const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

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
    if(nombre === '') {
      mostrarError();
      // se ejecuta la funcion mostrarError
      // va al state, identifica el type VALIDAR_FORMULARIO,
      // va al reducer identifica el case VALIDAR_FORMULARIO y cambia el error a true
      // vuelve a esta pagina y en el ternario en el formulario muestra el mensaje
      // luego lo agregamos a AGREGAR_PROYECTO en el reducer como false para esconderlo
      return;
    }
    //Agregarlo al state
    agregarProyecto(proyecto);
    //Reiniciar el form
    //para que cuando se vuelva a usar este vacio
    guardarProyecto({
      nombre: ''
    })
  }

  // Mostrar el Formulario
  const onClickFormulario = () => {
    mostrarFormulario()
  }


  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={ onClickFormulario }
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
        ) : null }
        { errorformulario ? <p className="mensaje error">El Nombre del Proyecto es Obligatorio.</p> : null }
    </Fragment>

  );
};

export default NuevoProyecto;