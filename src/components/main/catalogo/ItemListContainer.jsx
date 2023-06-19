import { useState, useEffect } from "react"
import { pedirDatosCatalogo } from "../../../helpers/pedirDatosCatalogo"
import ItemList from "./ItemList"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatosCatalogo()
            .then((res) => {
                setProductos(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="container my-5">
            <ItemList items={productos} />
        </div>
    )
}

export default ItemListContainer