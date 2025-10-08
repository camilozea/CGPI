import { useState } from "react";
import Home from "./Home/home";
import "./App.css";
import Login from "./Login/login";
import Register from "./Register/register";

function App() {
  const [singMethod, setSingMethod] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para gestionar el login
  const [loading, setLoading] = useState(false);

  const acces = [{ user: "admin", password: "admin" }];

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          {isLoggedIn ? ( // Si está logueado, mostrar Home
            <Home />
          ) : (
            <>
              {singMethod ? ( // Si está en el login, mostrar Login
                <div className="container-login" style={{ display: "flex" }}>
                  <Login
                    setSingMethod={setSingMethod}
                    users={acces}
                    setIsLoggedIn={setIsLoggedIn}
                    loading={loading}
                    setLoading={setLoading}
                  />

                  <div
                    className="container-logo"
                    style={{
                      display: "flex",
                      height: "100vh",
                      width: "50vw",
                      justifyContent: "center",
                      alignItems: "center",
                      background: " #2c3e50",
                    }}
                  >
                    <img
                      className="logo"
                      src="./src/assets/logo.png"
                      alt=""
                      style={{ filter: "invert(1)" }}
                    />
                  </div>
                </div>
              ) : (
                // Si está en el registro, mostrar Register
                <div className="c" style={{ display: "flex" }}>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      height: "100vh",
                      width: "50vw",
                      justifyContent: "center",
                      alignItems: "center",
                      background: " #2c3e50",
                    }}
                  >
                    <img
                      style={{ filter: "invert(1)" }}
                      src="./src/assets/logo.png"
                      alt=""
                    />
                  </div>
                  <Register setSingMethod={setSingMethod} users={acces} />
                </div>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}

export default App;
