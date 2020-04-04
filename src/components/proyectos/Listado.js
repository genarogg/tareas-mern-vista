import React from "react";
import Proyecto from "./Proyecto";

const ListadoProyecto = () => {
  const proyecto = [
    { nombre: "Tienda Virtual" },
    { nombre: "Intranet" },
    { nombre: "Diseño de sitio web" },
  ];
  return (
    <ul className="listado-proyecto">
      {proyectos.map((proyecto) => (
        <Proyecto proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyecto;
