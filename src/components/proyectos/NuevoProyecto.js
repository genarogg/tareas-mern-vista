import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  /* Obtener el state del formaulario */
  const proyectosContext = useContext(proyectoContext);
  const { formulario } = proyectosContext;

  /* State para el Proyecto */
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  /* Extraer nombre de proyecto */
  const { nombre } = proyecto;
  /* Lee los contenidos del input */
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  /* Cuenado el usuario envia un proyecto */
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    /* Validar el proyecto */

    /* Agregar al state */

    /* Reiniciar el form */
  };
  return (
    <Fragment>
      {console.log(formulario)}
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form
          action=""
          className="formulario-nuevo-proyecto"
          onSubmit={onSubmitProyecto}
        >
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
