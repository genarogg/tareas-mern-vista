import React from "react";

const Login = () => {

    /* State para iniciar Sesión */
    const [usuario, guardar] = useState({
        email: "",
        password: ""
    })
  const onChange = () => {
    /*  */
  };
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Seción</h1>
        <form action="">
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Tu Email"
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
