import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="logoMain">INDARG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#nosotros">NOSOTROS</Nav.Link>
            <Nav.Link href="#productos">PRODUCTOS</Nav.Link>
            <NavDropdown title="MAS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">SERVICIOS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                FRAMEWORK
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FAQs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                CONTACTO
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className='d-flex'>
            <button type="button" class="btn p-1" data-bs-toggle="modal"
              data-bs-target="#">
              <img src="img/icons/bag.svg" alt="Carrito" className='cartLogo' />
            </button>
            <p>0</p>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
