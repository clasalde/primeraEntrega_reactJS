import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/styles.scss"
import { NavBar } from "./components/header/NavBar"
import { AboutUs } from "./components/main/AboutUs"
import { ProductCard } from  "./components/main/ProductCard"
import { Footer } from "./components/footer/Footer"

function App() {

  return (
    <>
      <header className="container-fluid sticky-top">
        <NavBar />
      </header>

      <main>
        <section>
          <h2 className="text-center my-5 py-3">SOBRE NOSOTROS</h2>
          <section className="container d-flex flex-wrap justify-content-center gap-3 mt-3">
            <AboutUs img="/img/about_us/claudio_nosotros.webp" title="Claudio Lasalde" desc="Lic. en Administración, UADE" cta="LinkedIn" />
            <AboutUs img="/img/about_us/guadalupe_nosotros.webp" title="Guadalupe Di Lorenzo" desc="Abogada, UBA" cta="LinkedIn" />
            <AboutUs img="/img/about_us/gaston_nosotros.webp" title="Gastón Molina" desc="Ing. Industrial, UDeSA" cta="LinkedIn" />
            <AboutUs img="/img/about_us/richard_nosotros.webp" title="Ricardo Di Fascio" desc="Ing. Sistemas, UTN" cta="LinkedIn" />
            <AboutUs img="/img/about_us/sofia_nosotros.webp" title="Sofía Nascimbene" desc="Artista Plástica, USAL" cta="LinkedIn" />
          </section>
        </section>
        <section>
          <h2 className="text-center my-5 py-3">NUESTROS PRODUCTOS</h2>
          <section className="productos">
            <ProductCard img="/img/products/k01_kamado_blanco.webp" product="Kamado Blanco" desc="Kamado pequeño ideal para el balcón" price={580000} />
            <ProductCard img="/img/products/k02_kamado_chico.webp" product="Kamado Chico" desc="Kamado pequeño ideal para el balcón" price={580000} />
            <ProductCard img="/img/products/k03_kamado_lateral.webp" product="Kamado Lateral" desc="Kamado pequeño ideal para el balcón" price={580000} />
            <ProductCard img="/img/products/k04_kamado_luxury.webp" product="Kamado Luxury" desc="Kamado pequeño ideal para el balcón" price={580000} />
            <ProductCard img="/img/products/k05_kamado_patas.webp" product="Kamado Patas" desc="Kamado pequeño ideal para el balcón" price={580000} />
            <ProductCard img="/img/products/k06_kamado_rojo.webp" product="Kamado Rojo" desc="Kamado pequeño ideal para el balcón" price={580000} />
            <ProductCard img="/img/products/p1_paellera_patas.webp" product="Paellera Patas" desc="Kamado pequeño ideal para el balcón" price={580000} />
            <ProductCard img="/img/products/p2_parrilla_mesa_carbon.webp" product="Parrilla Mesa" desc="Kamado pequeño ideal para el balcón" price={580000} />
          </section>
        </section>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
