import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import CartWidget from '../main/catalogo/CartWidget';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export function NavBar() {
  const { user, logout } = useContext(AuthContext)

  return (
    <Navbar className="container-fluid sticky-top p-0" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="logoMain">INDARG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link to="/primeraEntrega_reactJS/" className="linkItems">INICIO</Link>
            <Link to="/primeraEntrega_reactJS/productos/Kamados" className="linkItems">KAMADOS</Link>
            <Link to="/primeraEntrega_reactJS/productos/Paelleras" className="linkItems">PAELLERAS</Link>
            <Link to="/primeraEntrega_reactJS/productos/Parrillas" className="linkItems">PARRILLAS</Link>
            <Link to="/primeraEntrega_reactJS/nosotros" className="linkItems">NOSOTROS</Link>
          </Nav>
          <div>
            <CartWidget />
          </div>
        </Navbar.Collapse>
      </Container>
      <p>Bienvenido: {user.email}</p>
      <button className='btn btn-danger' onClick={logout}>Logout</button>
    </Navbar>
  );
}
