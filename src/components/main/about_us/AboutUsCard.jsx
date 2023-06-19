import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AboutUsCard = ({nombre, titulo, institucion, linkedin, img}) => {

  return (
    <Card style={{ width: '15rem' }} className="d-flex">
      <Card.Img variant="top" src={img} />
      <Card.Body className="d-flex flex-column justify-content-between text-center">
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{titulo}, {institucion}</Card.Text>
        <Button variant="primary">LinkedIn
          <a href={linkedin}></a></Button>
      </Card.Body>
    </Card>
  );
}

export default AboutUsCard
