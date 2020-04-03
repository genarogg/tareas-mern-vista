import React, { useState } from "react";

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
        <h1>Iniciar Seción</h1>
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
      </div>
    </div>
  );
};

export default Login;
