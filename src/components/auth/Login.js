import React, { useState, useContext, useEffect } from "react";

import { Link } from "react-router-dom";

import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/autenticacion/authContext";

const Login = (props) => {
  /* Extraer los valores del context */
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, iniciarSesion } = authContext;

  /* State para iniciar Sesión */
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });

  /* Extraer Usuario */
  const { email, password } = usuario;
  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  /* Cuando el usuario quiere iniciar sesion */
  const onSubmit = (e) => {
    e.preventDefault();

    /* Validar que no haya campos vacios */
    if (email.trim() === "" || password.trim() === "") {
      mostrarAlerta("todos los campos son obligatoris", "alerta-error");
    }
    /* Pasarlo al action */
    iniciarSesion({ email, password });
  };

  
  /* En caso de qeu el usuariok o el password no exista */

  useEffect(() => {
    if(autenticado){
     props.history.push('/proyectos')
    }
 
    if(mensaje){
     mostrarAlerta(mensaje.msg, mensaje.categoria);
   
    }
   }, [mensaje, autenticado, props.history])

  return (
    <div className="form-usuario">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Tu Email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Tu Password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              value="Iniciar Sesion"
              className="btn btn-primario btn-block"
            />
          </div>
        </form>
        <Link to={"./nueva-cuenta"} className="enlace-cuenta">
          Obtener Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
