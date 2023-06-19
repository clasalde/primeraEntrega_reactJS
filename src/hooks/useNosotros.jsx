import { useState, useEffect } from "react"
import { pedirDatosNosotros } from "../helpers/pedirDatosNosotros"

export const useNosotros = () => {

    const [nosotros, setNosotros] = useState([])

    useEffect(() => {
        pedirDatosNosotros()
            .then((res) => setNosotros(res))
            .catch((error) => console.log(error))
    }, [])

    return {
        nosotros
    }
}