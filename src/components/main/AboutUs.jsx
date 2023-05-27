import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function AboutUs({ img, title, desc, cta }) {
  return (
    <Card style={{ width: '15rem' }} className="d-flex">
      <Card.Img variant="top" src={img} />
      <Card.Body className="d-flex flex-column justify-content-between text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="primary">{cta}</Button>
      </Card.Body>
    </Card>
  );
}
