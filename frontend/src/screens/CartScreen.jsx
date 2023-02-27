import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStoreProvider } from '../store/StoreProvider';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';
import { Row, Col, ListGroup, ListGroupItem, Image } from 'react-bootstrap';

export default function CartScreen() {
    const { id, qty } = useParams();
    const [state, dispatch] = useStoreProvider();
    console.log(state);

    useEffect(() => {
        console.log('useEffect fired');
        if (id) {
            addToCart(id, qty, state, dispatch);
        }
    }, []);
    const { cartItems } = state.cart;

    return (
        <>
            <Row>
                <Col md={8}>
                    <h1>Shopping Cart</h1>
                    {cartItems.length === 0 ? (
                        <>
                            <Message message='Your cart is empty' />
                            <Link className='btn btn-light' to='/'>
                                Go Back
                            </Link>
                        </>
                    ) : (
                        <ListGroup variant='flush'>
                            {cartItems.map((item, index) => (
                                <ListGroupItem key={item.product}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col md={8}>{item.name}</Col>
                                        <Col md={2}>{item.qty}</Col>
                                    </Row>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    )}
                </Col>
                <Col md={2}></Col>
                <Col md={2}></Col>
            </Row>
        </>
    );
}
