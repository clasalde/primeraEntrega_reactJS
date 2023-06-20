import { useEffect, useState } from "react"
import { pedirDatosCatalogo } from "../helpers/pedirDatosCatalogo"
import { useParams } from "react-router-dom"

export const useProductos = () => {
    
    const [productos, setProductos] = useState([])
    
    const {categoriaId} = useParams() 
    
    useEffect(() => {
        pedirDatosCatalogo()
            .then((res) => {
                if (!categoriaId) {
                    setProductos(res)
                } else {
                    setProductos(res.filter((item) => item.categoria === categoriaId))
                }
            })
            .catch((error) => console.log(error))
    }, [categoriaId])
    
    return {
        productos
    }
}


