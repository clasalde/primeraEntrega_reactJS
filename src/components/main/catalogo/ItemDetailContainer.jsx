import { useState, useEffect } from "react";
import { pedirDatosCatalogo } from "../../../helpers/pedirDatosCatalogo";
import { useParams, useNavigate } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { Button } from "react-bootstrap"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const { itemId } = useParams()

    const navigate = useNavigate()

    const volver = () => {
        navigate(-1)
    }
   
    
    useEffect(() => {
        pedirDatosCatalogo()
        .then((res) => {
            setItem(res.find((prod) => prod.id === Number(itemId)))
        })
        .catch((error) => console.log(error))
    }, [itemId])

    return (
        <div className="container my-5">
            <ItemDetail {...item}/>
            <Button onClick={volver} className="btn btn-secondary my-3">Volver a inicio</Button>
        </div>
    )
}

export default ItemDetailContainer