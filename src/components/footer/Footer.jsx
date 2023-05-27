import Nav from 'react-bootstrap/Nav';

export function Footer() {
  return (
    <>
      <Nav className="justify-content-center mt-2" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" href="#">POLITICA DE PRIVACIDAD</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" href="#">UBICACIÓN</Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-4 mb-4">Copyright - INDARG 2023</p>
    </>
  );
}
