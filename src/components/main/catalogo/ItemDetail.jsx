import { useContext, useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom";
import { CartContext } from "../../../contexto/CartContext";

const ItemDetail = ({ id, product, desc, img, price, category, descLarga, stock }) => {
    
    const { agregarAlCarrito, inCart } = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    },[]);

    const handleAgregar = () => {
      const item = {
        id, product, desc, img, price, category, descLarga, stock, cantidad
      }
      agregarAlCarrito(item)
    }

    return (
        <Card className={`container d-flex ${windowWidth < 790 ? "flex-column" : "flex-row"}`}>
          <Card.Img className="imgDetail" src={img} />
          <Card.Body>
            <Card.Title>{product}</Card.Title>
            <Card.Text>{desc}</Card.Text>
            <Card.Text>{descLarga}</Card.Text>
            <Card.Text className="textBig">Precio: ${price}</Card.Text>
            <small>Categoría: {category}</small>
          {
            inCart(id)
              ? <div className="d-flex m-auto">
                  <Link className="btn bg-black text-white my-2 w-75 m-auto text-center" to="../primeraEntrega_reactJS/carrito">Ver Carrito</Link>
                </div>
              : <ItemCount
                  max={stock}
                  cantidad={cantidad}
                  setCantidad={setCantidad}
                  handleAgregar={handleAgregar}
                />
          }
          </Card.Body>
        </Card>
      );
    }

export default ItemDetail
