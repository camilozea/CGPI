function modalcreatesales() {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <span className="close-button">&times;</span>
          <h2>Crear Venta</h2>
          <form>
            <div className="form-group">
              <label htmlFor="product">Producto:</label>
              <input type="text" id="product" name="product" required />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Cantidad:</label>
              <input type="number" id="quantity" name="quantity" required />
            </div>
            <div className="form-group">
              <label htmlFor="price">Precio:</label>
              <input type="number" id="price" name="price" required />
            </div>
            <button type="submit">Crear Venta</button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .modal {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgb(0, 0, 0);
          background-color: rgba(0, 0, 0, 0.4);
        }
        .modal-content {
          background-color: #fefefe;
          margin: auto;
          padding: 20px;
          border: 1px solid #888;
          width: 80%;
          max-width: 500px;
          border-radius: 10px;
        }
        .close-button {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
        }
        .close-button:hover,
        .close-button:focus {
          color: black;
          text-decoration: none;
          cursor: pointer;
        }
        .form-group {
          margin-bottom: 15px;
        }
        .form-group label {
          display: block;
          margin-bottom: 5px;
        }
        .form-group input {
          width: 100%;
          padding: 8px;
          box-sizing: border-box;
        }
        button {
          background-color: #4caf50;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #45a049;
        }
      `}</style>
    </>
  );
}
export default modalcreatesales;
