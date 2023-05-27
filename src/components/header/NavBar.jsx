import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home" className="logoMain">INDARG</Navbar.Brand>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
