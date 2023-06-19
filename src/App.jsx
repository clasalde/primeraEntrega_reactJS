import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/styles.scss"
import { NavBar } from "./components/header/NavBar"
import { Footer } from "./components/footer/Footer"
import ItemListContainer from "./components/main/catalogo/ItemListContainer"
import AboutUsListContainer from "./components/main/about_us/AboutUsListContainer"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <header className="container-fluid sticky-top p-0">
        <NavBar />
      </header>

      <main>
        <AboutUsListContainer />
        <ItemListContainer />
      </main>

      <footer className="container-fluid bg-secondary py-2 mt-5">
        <Footer />
      </footer>
    </BrowserRouter>
  )
}

export default App
