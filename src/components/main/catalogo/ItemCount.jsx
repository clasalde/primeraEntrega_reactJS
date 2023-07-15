

const ItemCount = ({max, cantidad, setCantidad, handleAgregar}) => {


    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }


    return (
        <div>
            <div className="d-flex justify-content-evenly my-1">
                <p className="m-0 d-flex align-items-center">Seleccionar cantidad:</p>
                <div>
                    <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
                    <span className="mx-3">{cantidad}</span>
                    <button onClick={handleSumar} className="btn btn-primary">+</button>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button onClick={handleAgregar} className="btn btn-success my-2 w-75 d-flex justify-content-center">Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount