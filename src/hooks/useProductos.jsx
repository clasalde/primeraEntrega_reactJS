import { useEffect, useState } from "react"
import { pedirDatosCatalogo } from "../helpers/pedirDatosCatalogo"
import { useParams } from "react-router-dom"

export const useProductos = () => {
    
    const [productos, setProductos] = useState([])
    
    const {categoryId} = useParams() 
    
    useEffect(() => {
        pedirDatosCatalogo()
            .then((res) => {
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos(res.filter((item) => item.category === categoryId))
                }
            })
            .catch((error) => console.log(error))
    }, [categoryId])
    
    return {
        productos
    }
}


