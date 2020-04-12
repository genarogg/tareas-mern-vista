import React, { useContext } from "react";
import tareaContext from "../../context/tareas/tareaContext";

const Tarea = ({ tarea }) => {
  /* Obtener la funcion del context de tarea */
  const tareasContext = useContext(tareaContext);
  const { eliminarTarea } = tareasContext;

  /* Funciones que se ejecuta cuando el usuario prisiona el btn de eliminar tarea */
  const tareaEliminar = id => {
    eliminarTarea(id)
  }

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="completo">
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto">
            InCompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => tareaEliminar(tarea.id)}
        >
          Eliminar{" "}
        </button>
      </div>
    </li>
  );
};

export default Tarea;
