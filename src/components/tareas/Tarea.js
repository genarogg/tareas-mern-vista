import React from "react";

const Tarea = () => {
  return (
    <li className="tarea sombra">
      <p>{Tarea.nombre}</p>
      <div className="estado">
        {Tarea.estado} ? ({" "}
        <button type="button" className="completo">
          Completo
        </button>
        )
      </div>
    </li>
  );
};

export default Tarea;
