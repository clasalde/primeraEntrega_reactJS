import AboutUsCard from "./AboutUsCard"


const AboutUsList = ({items}) => {

    return (
        <div>
            <h2 className="text-center my-5 py-3">SOBRE NOSOTROS</h2>
            <div className="container d-flex flex-wrap justify-content-center gap-3 mt-3">
                {
                    items.map((nosotros) => <AboutUsCard key={nosotros.id} {...nosotros}/>)
                }
            </div>
        </div>
    )
}

export default AboutUsList