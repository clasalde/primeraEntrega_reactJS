import { useEffect, useState } from "react"
import { pedirDatosCatalogo } from "../helpers/pedirDatosCatalogo"

export const useProductos = () => {
    
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        pedirDatosCatalogo()
            .then((res) => setProductos(res))
            .catch((error) => console.log(error))
    }, [])
    
    return {
        productos
    }
}


