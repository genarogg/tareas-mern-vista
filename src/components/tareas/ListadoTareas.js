import React from "react";

const FormTareas = () => {
  return (
    <div className="formulario">
      <form action="">
        <div className="contendor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
          />
        </div>
        <div className="contenedor-input"><input type="submit" className="btn btn-primario btn-submit btn-block" value="Agregar Tarea"/></div>
      </form>
    </div>
  );
};

export default FormTareas;
