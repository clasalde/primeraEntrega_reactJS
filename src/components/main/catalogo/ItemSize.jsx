const ItemSize = ({setSize}) => {

    const handleSize = (e) => {
        setSize(e.target.value)
    }

    return (
        <div className="d-flex justify-content-evenly my-2">
            <p className="m-0 d-flex align-items-center">Seleccionar tamaño:</p>
            <select onChange={handleSize} className="btn btn-outline-primary">
                <option value={"C"}>Chico</option>
                <option value={"M"}>Mediano</option>
                <option value={"G"}>Grande</option>
            </select>
        </div>
    )
}

export default ItemSize