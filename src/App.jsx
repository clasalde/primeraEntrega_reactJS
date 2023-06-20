import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/styles.scss"
import { NavBar } from "./components/header/NavBar"
import { Footer } from "./components/footer/Footer"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Contacto from "./components/main/contacto/Contacto"
import ItemListContainer from "./components/main/catalogo/ItemListContainer"
import AboutUsListContainer from "./components/main/about_us/AboutUsListContainer"

function App() {

  return (

    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="primeraEntrega_reactJS/" element={<ItemListContainer />} />
        <Route path="primeraEntrega_reactJS/productos/:categoriaId" element={<ItemListContainer />} />
        <Route path="primeraEntrega_reactJS/nosotros" element={<AboutUsListContainer />} />
        <Route path="primeraEntrega_reactJS/contacto" element={<Contacto />} />
        <Route path="*" element={<Navigate to={"primeraEntrega_reactJS/"}/>} />
      </Routes>

      <Footer />
              
    </BrowserRouter>

  )
}

export default App
