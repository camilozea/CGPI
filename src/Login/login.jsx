import loginService from "../services/login";
import React, { useState } from "react";
import "./login.css";
function Login({ setSingMethod, acces, setIsLoggedIn, loading, setLoading }) {
  async function iniciarSesion(credenciales) {
    setLoading(true); // Cambiar el estado de carga
    try {
      const response = await loginService(
        credenciales.user,
        credenciales.password
      );
      if (response.length > 0) {
        setIsLoggedIn(true);
        console.log("Usuario logueado");
        console.log(response);
      } else {
      }
    } catch (error) {
      alert("Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div
          className="container-login"
          style={{
            display: "flex",
            height: "100vh",
            width: "50vw",
            justifyContent: "center",
            alignItems: "center",
            background: "rgb(255, 255, 255)",
          }}
        >
          <form className="form-login" action="">
            <h1>Iniciar Sesión</h1>

            <label>Usuario</label>
            <input
              type="text"
              name="Usuario"
              id="current-user"
              placeholder="Ingrese su usuario"
            />
            <label htmlFor="">Contraseña</label>
            <input
              type="password"
              name="Contraseña"
              id="current-password"
              placeholder="Contraseña"
            />
            <button
              className="button-login"
              onClick={(e) => {
                e.preventDefault();
                const user = document.querySelector(
                  'input[name="Usuario"]'
                ).value;
                const password = document.querySelector(
                  'input[name="Contraseña"]'
                ).value;
                if (!user || !password) {
                  alert("Por favor ingrese usuario y contraseña");
                  return;
                }
                iniciarSesion({ user, password });
              }}
            >
              Ingresar
            </button>
            <div className="register-link">
              <a
                onClick={() => {
                  setSingMethod(false); // Cambiar al método de registro
                }}
              >
                Registrarse
              </a>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
