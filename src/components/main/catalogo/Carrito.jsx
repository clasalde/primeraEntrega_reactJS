import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import Card from 'react-bootstrap/Card';
import { FaTrash } from 'react-icons/fa';


const Carrito = () => {
  const { cart, totalCarrito, vaciarCarrito, eliminarDelCarrito} = useContext(CartContext);

  return (
    <div>
        <h2 className="text-center my-5 py-3">CARRITO DE COMPRAS</h2>
        <h3 className="textTotal">Total: $<strong>{totalCarrito()}</strong></h3>
        <button onClick={vaciarCarrito} className="btn btn-danger d-flex m-auto mb-3">Vaciar Carrito</button>
        <div className="productos container d-flex flex-wrap justify-content-center">
            {cart.map((prod) => (
                <Card style={{ width: '19rem' }}>
                    <div key={prod.id}>
                        <h4 className="text-center my-2">{prod.product}</h4>
                        <img src={prod.img} alt={prod.desc} className="d-flex m-auto"/>
                        <div className="d-flex flex-column align-items-center">
                            <p>Precio: ${prod.price}</p>
                            <p>Cantidad: {prod.cantidad}</p>
                            <p>Tamaño: {prod.size}</p>
                        </div>
                        <button onClick={() => eliminarDelCarrito(prod.id)} className="btn btn-danger d-flex m-auto w-25 justify-content-center my-2"><FaTrash /></button>
                    </div>
                </Card>
            ))}
        </div>
    </div>
  );
};

export default Carrito