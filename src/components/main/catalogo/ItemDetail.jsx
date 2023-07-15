import { useContext, useState } from "react";
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import ItemSize from "./ItemSize";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";

const ItemDetail = ({ id, product, desc, img, price, category, descLarga, stock }) => {
    
    const { agregarAlCarrito, inCart } = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)
    const [size, setSize] = useState()

    const handleAgregar = () => {
      const item = {
        id, product, desc, img, price, category, descLarga, stock, cantidad, size
      }
      agregarAlCarrito(item)
    }

    return (
        <Card style={{ width: '19rem' }}>
          <Card.Img variant="top" src={img} className="m-auto"/>
          <hr className='w-75 m-auto my-3'/>
          <Card.Body className="d-flex flex-column justify-content-between text-center">
            <Card.Title>{product}</Card.Title>
            <Card.Text>{desc}</Card.Text>
            <Card.Text>{descLarga}</Card.Text>
            <Card.Text className="textBig">Precio: ${price}</Card.Text>
            <small>Categoría: {category}</small>
          </Card.Body>

          <ItemSize
            setSize={setSize}
          />

          {
            inCart(id)
              ? <div className="d-flex justify-content-center">
                  <Link className="btn bg-black text-white my-2 w-75" to="primeraEntrega_reactJS/carrito">Finalizar Compra</Link>
                </div>
              : <ItemCount
                  max={stock}
                  cantidad={cantidad}
                  setCantidad={setCantidad}
                  handleAgregar={handleAgregar}
                />
          }
        </Card>
      );
    }

export default ItemDetail