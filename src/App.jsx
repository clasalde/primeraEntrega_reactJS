import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/styles.scss"
import { AuthContextProvider } from "./contexto/AuthContext"
import { CartProvider } from "./contexto/CartContext"
import AppRouter from "./router/AppRouter"

function App() {

  return (
    <AuthContextProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </AuthContextProvider>
  );
};

export default App
