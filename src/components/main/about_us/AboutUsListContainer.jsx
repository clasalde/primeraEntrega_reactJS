import { useState, useEffect } from "react"
import { pedirDatosNosotros } from "../../../helpers/pedirDatosNosotros"
import AboutUsList from "./AboutUsList"


const AboutUsListContainer = () => {

    const [nosotros, setNosotros] = useState([])

    useEffect(() => {
        pedirDatosNosotros()
            .then((res) => {
                setNosotros(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="container my-5">
            <AboutUsList items={nosotros} />
        </div>
    )
}

export default AboutUsListContainer