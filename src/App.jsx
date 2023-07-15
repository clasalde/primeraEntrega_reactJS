import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/styles.scss"
import { NavBar } from "./components/header/NavBar"
import { Footer } from "./components/footer/Footer"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ItemListContainer from "./components/main/catalogo/ItemListContainer"
import AboutUsListContainer from "./components/main/about_us/AboutUsListContainer"
import ItemDetailContainer from "./components/main/catalogo/ItemDetailContainer"

function App() {

  return (

    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="primeraEntrega_reactJS/" element={<ItemListContainer />} />
        <Route path="primeraEntrega_reactJS/productos/:categoryId" element={<ItemListContainer />} />
        <Route path="primeraEntrega_reactJS/detail/:itemId" element={<ItemDetailContainer />} />
        <Route path="primeraEntrega_reactJS/nosotros" element={<AboutUsListContainer />} />
        <Route path="*" element={<Navigate to={"primeraEntrega_reactJS/"}/>} />
      </Routes>

      <Footer />
              
    </BrowserRouter>

  )
}

export default App
