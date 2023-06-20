import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemCard = ({id, product, desc, img, price}) => {

  return (
    <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={img} className="m-auto"/>
      <hr className='w-75 m-auto my-3'/>
      <Card.Body className="d-flex flex-column justify-content-between text-center">
        <Card.Title>{product}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Card.Text>Precio: ${price}</Card.Text>
        <Link className='btn btn-secondary' to={`/primeraEntrega_reactJS/detail/${id}`}>Comprar</Link>
      </Card.Body>
    </Card>
  );
}

export default ItemCard
