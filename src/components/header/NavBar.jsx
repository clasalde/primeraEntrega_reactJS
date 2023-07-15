import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import CartWidget from '../main/catalogo/CartWidget';

export function NavBar() {
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
            <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
