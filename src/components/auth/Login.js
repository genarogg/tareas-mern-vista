import React, { useState } from "react";
import { Link } from "react-router-dom"
const Login = () => {
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
  const onSubmit = e => {

    e.preventDefault();

    /* Validar que no haya campos vacios */
    /* Pasarlo al action */
  }

  return (
    <div className="form-usuario">
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
        <Link to={"./nueva-cuenta"} className="enlace-cuenta">Obtener Cuenta</Link>
      </div>
    </div>
  );
};

export default Login;
