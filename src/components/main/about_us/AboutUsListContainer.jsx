import AboutUsList from "./AboutUsList"
import { useNosotros } from "../../../hooks/useNosotros"


const AboutUsListContainer = () => {

    const { nosotros } = useNosotros()

    return (
        <div className="container my-5">
            <AboutUsList items={nosotros} />
        </div>
    )
}

export default AboutUsListContainer