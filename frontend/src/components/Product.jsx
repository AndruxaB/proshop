import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product({ product }) {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
                <Card.Title as='div' className='mt-3'>
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as='div' className='mb-3'>
                <Rating rating={product.rating} numReviews={product.numReviews} />
            </Card.Text>
            <Card.Text as='h3'>${product.price}</Card.Text>
        </Card>
    );
}
