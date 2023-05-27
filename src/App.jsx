import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/styles.scss"
import { NavBar } from "./components/header/NavBar"
import { AboutUs } from "./components/main/AboutUs"
import { ProductCard } from  "./components/main/ProductCard"
import { Footer } from "./components/footer/Footer"

function App() {

  return (
    <>
      <header className="container-fluid sticky-top p-0">
        <NavBar />
      </header>

      <main>
        {/* Sobre Nosotros */}
        <section>
          <h2 className="text-center my-5 py-3" id="nosotros">SOBRE NOSOTROS</h2>
          <section className="container d-flex flex-wrap justify-content-center gap-3 mt-3">
            <AboutUs img="/img/about_us/claudio_nosotros.webp" title="Claudio Lasalde" desc="Lic. en Administración, UADE" cta="LinkedIn" />
            <AboutUs img="/img/about_us/guadalupe_nosotros.webp" title="Guadalupe Di Lorenzo" desc="Abogada, UBA" cta="LinkedIn" />
            <AboutUs img="/img/about_us/gaston_nosotros.webp" title="Gastón Molina" desc="Ing. Industrial, UDeSA" cta="LinkedIn" />
            <AboutUs img="/img/about_us/richard_nosotros.webp" title="Ricardo Di Fascio" desc="Ing. Sistemas, UTN" cta="LinkedIn" />
            <AboutUs img="/img/about_us/sofia_nosotros.webp" title="Sofía Nascimbene" desc="Artista Plástica, USAL" cta="LinkedIn" />
          </section>
        </section>
        {/* Productos */}
        <section>
          <h2 className="text-center my-5 py-3" id="productos">NUESTROS PRODUCTOS</h2>
          <section className="productos container d-flex flex-wrap justify-content-center">
            <ProductCard img="/img/products/k01_kamado_blanco.webp" product="Kamado Blanco" desc="Kamado pequeño ideal para el balcón" price={585700} />
            <ProductCard img="/img/products/k02_kamado_chico.webp" product="Kamado Chico" desc="Kamado con patas diseñado especialmente para un trabajo cómodo y seguro a una altura media" price={478600} />
            <ProductCard img="/img/products/k03_kamado_lateral.webp" product="Kamado Lateral" desc="Kamado con alas para simplificar la experiencia de cocina" price={645000} />
            <ProductCard img="/img/products/k04_kamado_luxury.webp" product="Kamado Luxury" desc="Diseño e innovación al servicio de la cocina de alto nivel" price={1250000} />
            <ProductCard img="/img/products/k05_kamado_patas.webp" product="Kamado Patas" desc="Práctico y liviano, nos permite optimizar los espacios" price={743000} />
            <ProductCard img="/img/products/k06_kamado_rojo.webp" product="Kamado Rojo" desc="Ideal para un regalo especial" price={695300} />
            <ProductCard img="/img/products/p1_paellera_patas.webp" product="Paellera Patas" desc="Disco de arado diseñado para parrillas y fogoneros" price={25300} />
            <ProductCard img="/img/products/p2_parrilla_mesa_carbon.webp" product="Parrilla Mesa" desc="Parrilla para interiores extra resistente" price={4500} />
          </section>
        </section>
      </main>

      <footer className="container-fluid bg-black py-2 mt-5">
        <Footer />
      </footer>
    </>
  )
}

export default App
