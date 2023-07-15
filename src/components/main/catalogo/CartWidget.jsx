import { useContext } from 'react';
import { FaOpencart } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext';


const CartWidget = () => {

    const { cantidadItemsCarrito } = useContext(CartContext)

    return (
        <div className='d-flex'>
            <Link to="primeraEntrega_reactJS/carrito" className='d-flex'>
                <FaOpencart className='cartLogo' />
            </Link>
            <span className='mx-2 text-center textCart'>{cantidadItemsCarrito()}</span>
        </div>
    )
}

export default CartWidget
