import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { Button } from "react-bootstrap"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/config.js";

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    
    const { itemId } = useParams()

    const navigate = useNavigate()

    const volver = () => {
        navigate(-1)
    }
   
    
    useEffect(() => {
        const itemRef = doc(db, "productos", itemId)
        getDoc(itemRef)
            .then((doc) => {
                setItem({...doc.data(), id: doc.id})
            })
            .catch(e => console.log(e))
    }, [itemId])

    return (
        <div className="container my-5">
            <ItemDetail {...item}/>
            <Button onClick={volver} className="btn btn-secondary my-3">Volver a inicio</Button>
        </div>
    )
}

export default ItemDetailContainer