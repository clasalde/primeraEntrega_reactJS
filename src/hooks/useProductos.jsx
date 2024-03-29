import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config.js"

export const useProductos = () => {
    
    const [productos, setProductos] = useState([])
    
    const {categoryId} = useParams() 
    
    useEffect(() => {
        const productosRef = collection(db, "productos")
        const q = categoryId
                    ? query(productosRef, where("category", "==", categoryId))
                    : productosRef
        getDocs(q)
            .then((resp) => {
                const items = resp.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setProductos(items)
            })
            .catch(e => console.log(e))
    }, [categoryId])
    
    return {
        productos
    }
}


