import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';

const NuevaCuenta = () => {

  // Extraer los walored del context para alertaContext
  const alertaContext = useContext(AlertaContext); // ya tenemos acceso al state y a las funciones
  const { alerta, mostrarAlerta } = alertaContext;

  // Definir el state para iniciar sesion
  const [ usuario, guardarUsuario ] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: ''
  });

  // extraer de usuario
  const { nombre, email, password, confirmar } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  // Cuando el usuario quiere iniciar sesion
  const onSubmit = (e) => {
    e.preventDefault();

    // Validar que no haya campos vacios
    if( nombre.trim() === '' ||
        email.trim() === '' ||
        password.trim() === '' ||
        confirmar.trim() === '' ) {
          mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
          return;
    }

    // Password minimo de 6 caracteres
    if(password.length < 6) {
      mostrarAlerta('El password tiene que tener al menos 6 caracteres', 'alerta-error');
      return;
    }

    // Los 2 password sean iguales
    if(password !== confirmar) {
      mostrarAlerta('Los passwords no son iguales', 'alerta-error');
      return;
    }

    // Pasarlo al action
  }

  return (
    <div className="form-usuario">
      { alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> ) : null }
      <div className="contenedor-form sombra-dark">
        <h1>Crear Cuenta</h1>

        <form
          onSubmit={onSubmit}
        >
        <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              placeholder="Tu Nombre"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Tu Email"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Tu Password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar Password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              value={confirmar}
              placeholder="Repite tu Password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input type="submit" className="btn btn-primario  btn-block" value="Registrarme"/>
          </div>
        </form>

        <Link to={'/'} className="enlace-cuenta">
          Iniciar Sesion
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;