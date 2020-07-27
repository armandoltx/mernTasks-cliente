import React, { useContext } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {

  //Extraer proyectos del state inicial
  // primero definimos el context asi podemos consumir el state formulario sin necesidad de pasarlo a lo largo del arbol de componentes. Hay q pasar el context como parametro para acceder a el.
  const proyectosContext = useContext(proyectoContext);
  const { proyectos } = proyectosContext;

  // Revisar si proyectos tiene contenido
  if(proyectos.length ===0) return null;

  return (
    <ul className="listado-proyectos">
      {proyectos.map(proyecto => (
        <Proyecto
          key={proyecto.id}
          proyecto={proyecto}
        />
      ))}
    </ul>
  );
};

export default ListadoProyectos;