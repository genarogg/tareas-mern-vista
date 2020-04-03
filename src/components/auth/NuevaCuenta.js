import React, { useState } from "react";
import { Link } from "react-router-dom";
const NuevaCuenta = () => {
  /* State para iniciar Sesión */
  const [usuario, guardarUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  /* Extraer Usuario */
  const { nombre, email, password, confirmar } = usuario;
  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  /* Cuando el usuario quiere iniciar sesion */
  

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una cuenta</h1>
        
        
      </div>
    </div>
  );
};

export default NuevaCuenta;
