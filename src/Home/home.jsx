import React, { useState } from "react";
import "./home.css";

import Reports from "../Reports/reports";
import Inventory from "../Inventory/inventory";
import Sales from "../Sales/sales";
import Product from "../Product/product";

function Home() {
  // Usamos un estado para manejar el componente activo
  const [activeComponent, setActiveComponent] = useState("productos");

  // Función para manejar el cambio de componente
  const handleMenuClick = (component) => {
    setActiveComponent(component);
  };

  // Renderizar el componente basado en el estado
  const renderComponent = () => {
    switch (activeComponent) {
      case "Inicio":
        return <Home />;
      case "productos":
        return <Product />; // Puedes agregar aquí el componente de productos
      case "ventas":
        return <Sales />;
      case "inventarios":
        return <Inventory />;
      case "reportes":
        return <Reports />;
      default:
        return <h2>Bienvenido a la página principal</h2>;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <nav className="menu-vertical">
        <div className="icon-user">
          {" "}
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="10vh"
              filter="invert(1)"
              fill="currentColor"
              class="bi bi-person-square"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
            </svg>
          </a>
        </div>
        <br style={{ marginBottom: "500%", padding: "500%" }} />
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            filter: "invert(1)",
          }}
        >
          {" "}
          Bienvenidos{" "}
        </h3>
        <br />
        <h6></h6>
        <br style={{ marginBottom: "500%", padding: "500%" }} />
        <ul>
          <li>
            <a onClick={() => handleMenuClick("productos")}>Productos</a>
          </li>
          <li>
            <a onClick={() => handleMenuClick("ventas")}>Ventas</a>
          </li>
          <li>
            <a onClick={() => handleMenuClick("inventarios")}>Inventarios</a>
          </li>
          <li>
            <a onClick={() => handleMenuClick("reportes")}>Reportes</a>
          </li>
        </ul>
      </nav>
      <div className="container">
        {renderComponent()} {/* Mostrar el componente correspondiente */}
      </div>
    </div>
  );
}

export default Home;
