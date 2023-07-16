import { useState, useContext } from "react";
import { CartContext } from "../../contexto/CartContext";
import { Navigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config"
import { Link } from "react-router-dom"

const Checkout = () => {
    const { cart, totalCarrito, vaciarCarrito } = useContext(CartContext)

    const [orderid, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })
    
    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length === 0) {
            alert("El nomnbre es un campo obligatorio")
            return
        }

        if (values.direccion.length === 0) {
            alert("La dirección es un campo obligatorio")
            return
        }

        if (values.email.length === 0) {
            alert("El Email es un campo obligatorio")
            return
        }

        const orden = {
            cliente: values,
            items: cart,
            total: totalCarrito(),
            fecha: new Date()
        }

        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()
            })
            .catch(error => console.log(error))
    }

    if (orderid) {
        return (
            <div className="container my-5 text-center">
                <h3>Muchas gracias por tu compra!</h3>
                <h2>Ref: <strong>{orderid}</strong></h2>
                <Link to="/" className="btn btn-primary mt-5">Volver al Inicio</Link>
            </div>
        )
    }

    if (cart.length === 0){
        return <Navigate to="/"/>
    }


    return (
        <div>
            <h2 className="text-center my-5 py-3">CHECKOUT</h2>
            <div className="container d-flex flex-wrap justify-content-center gap-3 mt-3">

                <form onSubmit={handleSubmit}>
                    <input
                        value={values.nombre}
                        type="text"
                        placeholder="Nombre"
                        onChange={handleInputChange}
                        className="form-control my-2"
                        name="nombre"
                    />
                    <input
                        value={values.direccion}
                        type="text"
                        placeholder="Dirección"
                        onChange={handleInputChange}
                        className="form-control my-2"
                        name="direccion"
                    />
                    <input
                        value={values.email}
                        type="email"
                        placeholder="Email"
                        onChange={handleInputChange}
                        className="form-control my-2"
                        name="email"
                    />

                    <button className="btn btn-primary w-100" type="submit">Finalizar Checkout</button>

                </form>
            </div>
        </div>
    )
}

export default Checkout