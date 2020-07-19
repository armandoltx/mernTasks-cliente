import React from 'react';

const FormTarea = () => {
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