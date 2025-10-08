import LoadingsProducts from "../services/Products.js";
import { useEffect, useState } from "react";
import "./product.css";
import { useMemo } from "react";

function Product() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await LoadingsProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    }
    fetchProducts();
  }, []);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = useMemo(() => {
    return Array.from(
      { length: Math.ceil(products.length / productsPerPage) },
      (_, i) => i + 1
    );
  }, [products, productsPerPage]);

  return (
    <div className="producto-container">
      <div className="container-busqueda">
        <input
          className="input-select"
          type="text"
          name="Select"
          placeholder="Buscar producto"
        />
      </div>
      <div className="producto-header">
        <button className="butron-add" onClick={() => setShowModal(true)}>
          <span
            style={{
              marginRight: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </span>
          agregar producto
        </button>
      </div>
      <div className="producto-table-container">
        <table className="producto-table">
          <thead>
            <tr>
              <th>id</th>
              <th>nombre</th>
              <th>fecha</th>
              <th>Descrip</th>
              <th>acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name_product}</td>
                <td>{product.datetime}</td>
                <td>{product.Description}</td>
                <td>
                  <button className="butron-edit">
                    <div
                      className="container-edit-icon"
                      style={{
                        display: "inline",
                        marginRight: "0.4rem",
                        alignContent: "center",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-highlighter"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.096.644a2 2 0 0 1 2.791.036l1.433 1.433a2 2 0 0 1 .035 2.791l-.413.435-8.07 8.995a.5.5 0 0 1-.372.166h-3a.5.5 0 0 1-.234-.058l-.412.412A.5.5 0 0 1 2.5 15h-2a.5.5 0 0 1-.354-.854l1.412-1.412A.5.5 0 0 1 1.5 12.5v-3a.5.5 0 0 1 .166-.372l8.995-8.07zm-.115 1.47L2.727 9.52l3.753 3.753 7.406-8.254zm3.585 2.17.064-.068a1 1 0 0 0-.017-1.396L13.18 1.387a1 1 0 0 0-1.396-.018l-.068.065zM5.293 13.5 2.5 10.707v1.586L3.707 13.5z"
                        />
                      </svg>
                    </div>
                    Editar
                  </button>
                  <button className="butron-delete">
                    <div
                      className="container-delete-logo"
                      style={{
                        display: "inline",
                        marginRight: "0.4rem",
                        alignContent: "center",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </div>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-button"
              onClick={() => setShowModal(false)}
            >
              X
            </button>

            {/* Contenido del modal */}
            <form action="">
              <h2>Crear Producto</h2>
              <label>Nombre Producto</label>
              <input type="text" name="Name-product" />
              <label>Marca</label>
              <input type="text" name="Marca" />
              <label>Desctipción</label>
              <input type="text" name="Description" />
              <label>Precio</label>
              <input type="text" name="Price" />
              <button> Agregar </button>
            </form>
          </div>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "0 5px",
              cursor: "pointer",
              backgroundColor: currentPage === number ? "#007bff" : "#fff",
              color: currentPage === number ? "#fff" : "#000",
            }}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Product;
