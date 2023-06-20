import Card from 'react-bootstrap/Card';

const ItemDetail = ({ id, product, desc, img, price, category, descLarga }) => {

    return (
        <Card style={{ width: '19rem' }}>
          <Card.Img variant="top" src={img} className="m-auto"/>
          <hr className='w-75 m-auto my-3'/>
          <Card.Body className="d-flex flex-column justify-content-between text-center">
            <Card.Title>{product}</Card.Title>
            <Card.Text>{desc}</Card.Text>
            <Card.Text>{descLarga}</Card.Text>
            <Card.Text>Precio: ${price}</Card.Text>
            <small>Categoría: {category}</small>
          </Card.Body>
        </Card>
      );
    }

export default ItemDetail