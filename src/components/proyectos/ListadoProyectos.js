import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {

  //Extraer proyectos del state inicial
  // primero definimos el context asi podemos consumir el state formulario sin necesidad de pasarlo a lo largo del arbol de componentes. Hay q pasar el context como parametro para acceder a el.
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  // Obtener proyetos, cuando carga el componente, por eso el [] esta vacio.
  // el useEffect nunca puede estar despues de un return
  useEffect(() => {
    obtenerProyectos();
  },[]);

  // Revisar si proyectos tiene contenido
  if(proyectos.length ===0) return <p>No hay Proyectos, comienza creando uno.</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map(proyecto => (
          <CSSTransition
            key={proyecto.id}
            timeout={200}
            classNames="proyecto"
          >
            <Proyecto
              proyecto={proyecto}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;