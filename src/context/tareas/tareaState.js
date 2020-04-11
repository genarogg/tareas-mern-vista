import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { nombre: "Elegir Plataforma", estado: true, proyecto: 1 },
      { nombre: "Elegir Colores", estado: false, proyecto: 2 },
      { nombre: "Elegir Plataformas de pago", estado: false, proyecto: 3 },
      { nombre: "Elegir Hosting", estado: true, proyecto: 4 },
      { nombre: "Elegir Plataforma", estado: true, proyecto: 2 },
      { nombre: "Elegir Colores", estado: false, proyecto: 4 },
      { nombre: "Elegir Plataformas de pago", estado: false, proyecto: 3 },
      { nombre: "Elegir Hosting", estado: true, proyecto: 1 },
      { nombre: "Elegir Plataforma", estado: true, proyecto: 1 },
      { nombre: "Elegir Colores", estado: false, proyecto: 4 },
      { nombre: "Elegir Plataformas de pago", estado: false, proyecto: 2 },
      { nombre: "Elegir Hosting", estado: true, proyecto: 3  },
    ],
  };

  /* Crear dispatch y state */
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  return <TareaContext.Provider value={{tareas: state.tareas}}>{props.children}</TareaContext.Provider>;
};

export default TareaState;
