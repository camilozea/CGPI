import React from "react";
import "./register.css";
function Register({ setSingMethod, acces }) {
  return (
    <div className="container-register">
      <form className="form-register" action="">
        <h1>Registrarse</h1>

        <label> Nombre </label>
        <input type="text" name="Name " placeholder="Nombre" />
        <label> Apellido </label>
        <input name="Apellido" placeholder="Apellido" />
        <label> Correo </label>
        <input type="email" name="Correo" placeholder=" Correo" />
        <label> Usuario </label>
        <input type="text" name="Usuario" placeholder="Usuario" />
        <label> Contraseña </label>
        <input type="password" name="Contraseña" placeholder="Contraseña" />
        <button className="button-register"> Registrarse </button>
        <div className="container-return">
          <a
            onClick={() => {
              setSingMethod(true);
            }}
          >
            Ingresar
          </a>
        </div>
      </form>
    </div>
  );
}
export default Register;
