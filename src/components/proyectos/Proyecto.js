import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  /* Obtener el state del proyectos */
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  /* Funcion para agregar el proyecto actual */
  const seleccionarProyecto = id => {
    proyectoActual(id) /* Fija el proyecto actual */
  }
  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
