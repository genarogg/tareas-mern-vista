import React, { Fragment, useState } from "react";

const NuevoProyecto = () => {
  /* State para el Proyecto */
  const [proyecto, guardarProyecto] = useState => ({
    nombre: ""
  });

  const onchangeProyecto = e => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });

  }
  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>
      <form action="" className="formulario-nuevo-proyecto">
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="nombre"
        />
        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Agregar Proyecto"
        />
      </form>
    </Fragment>
  );
};

export default NuevoProyecto;
