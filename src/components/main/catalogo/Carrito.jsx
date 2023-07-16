import { useContext } from "react";
import { CartContext } from "../../../contexto/CartContext";
import Card from "react-bootstrap/Card";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaHandPointRight } from 'react-icons/fa';
import { FaHandPointLeft } from 'react-icons/fa';

const Carrito = () => {
  const { cart, totalCarrito, vaciarCarrito, eliminarDelCarrito } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="d-flex flex-column align-items-center">
        <h2 className="text-center my-5 py-3">
          Aún<strong className="noTienes"> no tienes productos </strong>en tu
          carrito!
        </h2>
        <h4 className="text-center"><FaHandPointRight /> No te pierdas nuestras ofertas <FaHandPointLeft /></h4>
        <Link to="/" className="btn btn-success w-25 my-3">
          Ir a la Tienda
        </Link>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-center my-5 py-3">CARRITO DE COMPRAS</h2>
      <h3 className="textTotal">
        Total: $<strong>{totalCarrito()}</strong>
      </h3>
      <div className="container anchoBtnCarrito d-flex flex-wrap">
        <button onClick={vaciarCarrito} className="btn btn-danger d-flex m-auto mb-3">
          Vaciar Carrito
        </button>
        <Link to="/" className="btn btn-primary d-flex m-auto mb-3">
          Seguir Comprando
        </Link>
        <Link to="../primeraEntrega_reactJS/checkout" className="btn btn-success d-flex m-auto mb-3">
          CheckOut
        </Link>
      </div>

      <div className="productos container d-flex flex-wrap justify-content-center">
        {cart.map((prod) => (
          <Card key={prod.id} style={{ width: "19rem" }}>
            <div>
              <h4 className="text-center my-2">{prod.product}</h4>
              <img src={prod.img} alt={prod.desc} className="d-flex m-auto" />
              <div className="d-flex flex-column align-items-center">
                <p>Precio: ${prod.price}</p>
                <p>Cantidad: {prod.cantidad}</p>
              </div>
              <button
                onClick={() => eliminarDelCarrito(prod.id)}
                className="btn btn-danger d-flex m-auto w-25 justify-content-center my-2"
              >
                <FaTrash />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Carrito;
