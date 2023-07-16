import { NavBar } from "../components/header/NavBar";
import { Footer } from "../components/footer/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexto/AuthContext";
import ItemListContainer from "../components/main/catalogo/ItemListContainer";
import AboutUsListContainer from "../components/main/about_us/AboutUsListContainer";
import ItemDetailContainer from "../components/main/catalogo/ItemDetailContainer";
import Carrito from "../components/main/catalogo/Carrito";
import Checkout from "../components/checkout/Checkout";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";


const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {
        user.logged
        ? <>
            <NavBar />

            <Routes>
              <Route path="primeraEntrega_reactJS/" element={<ItemListContainer />} />
              <Route path="primeraEntrega_reactJS/productos/:categoryId" element={<ItemListContainer />} />
              <Route path="primeraEntrega_reactJS/detail/:itemId" element={<ItemDetailContainer />} />
              <Route path="primeraEntrega_reactJS/nosotros" element={<AboutUsListContainer />} />
              <Route path="primeraEntrega_reactJS/carrito" element={<Carrito />} />
              <Route path="primeraEntrega_reactJS/checkout" element={<Checkout />} />
              <Route path="*" element={<Navigate to={"primeraEntrega_reactJS/"} />} />
            </Routes>

            <Footer />
          </>
        : <Routes>
            <Route path="primeraEntrega_reactJS/login" element={<LoginScreen />} />
            <Route path="primeraEntrega_reactJS/register" element={<RegisterScreen />} />
            <Route path="*" element={<Navigate to="primeraEntrega_reactJS/login" />} />
          </Routes>
      }
    </BrowserRouter>
  );
};

export default AppRouter;
