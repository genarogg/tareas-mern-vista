import React from "react";

const Login = () => {
  const onChange = () => {
    /*  */
  };
  return (
    <div className="from-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Seción</h1>
        <form action="">
          <div className="compo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Tu Email"
              onChange={onChange}
            />
          </div>
          <div className="compo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Tu Email"
              onChange={onChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
