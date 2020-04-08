import React from "react";
import Proyecto from "./Proyecto";

const ListadoProyecto = () => {
  
  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyecto;
