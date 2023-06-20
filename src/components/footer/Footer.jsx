import Nav from 'react-bootstrap/Nav';

export function Footer() {
  return (
    <footer className="container-fluid bg-secondary py-3 mt-5">
      <Nav className="justify-content-center mt-2" activeKey="/home">
        <Nav.Item>
          <Nav.Link className="textFooter" href="#">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="textFooter" eventKey="link-1" href="#">POLITICA DE PRIVACIDAD</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="textFooter" eventKey="link-2" href="#">UBICACIÓN</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className='d-flex justify-content-center gap-3 mt-3'>
        <a href="#"><img src="img/icons/facebook_icon.png" alt="Facebook" className="rsLogo"/></a>
        <a href="#"><img src="img/icons/instagram_icon.png" alt="Instagram" className="rsLogo"/></a>
        <a href="#"><img src="img/icons/linkedin_icon.png" alt="LinkedIn" className="rsLogo"/></a>
        <a href="#"><img src="img/icons/youtube_icon.png" alt="Youtuve" className="rsLogo"/></a>
      </div>
      <p className="text-center mt-4 mb-4 textCopy">Copyright - INDARG 2023</p>
    </footer>
  );
}
