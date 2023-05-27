import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export function ProductCard({ img, product, desc, price }) {
  return (
    <Row xs={1} md={2} className="g-3">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{product}</Card.Title>
              <Card.Text>{desc}</Card.Text>
              <h4>Price: ${price}</h4>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
