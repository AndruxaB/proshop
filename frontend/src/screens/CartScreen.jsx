/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useStoreProvider } from '../store/StoreProvider';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { Row, Col, ListGroup, ListGroupItem, Image, FormControl, Button, Card } from 'react-bootstrap';

export default function CartScreen() {
    const navigate = useNavigate();
    const { id, qty } = useParams();
    const [store, dispatch] = useStoreProvider();

    console.log(store);
    console.log('useStoreProvider()', useStoreProvider());

    useEffect(() => {
        console.log('useEffect fired');
        if (id) {
            addToCart(id, qty, dispatch);
        }
    }, []);

    const rmFmCart = (id) => {
        console.log(id);
        removeFromCart(id, dispatch);
    };

    const checkOut = () => {
        const redirect = 'shipping';
        navigate(`/login/${redirect}`);
    };

    const { cartItems } = store.cart;
    const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
    console.log(totalItems);
    return (
        <>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <Row>
                    <Col md={12}>
                        <Message message='Your cart is empty' />
                        <Link className='btn btn-light' to='/'>
                            Go Back
                        </Link>
                    </Col>
                </Row>
            ) : (
                <Row>
                    <Col md={8}>
                        <ListGroup variant='flush'>
                            {cartItems.map((item, index) => (
                                <ListGroupItem key={item.product}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col md={4}>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>
                                        <Col md={2}>${item.price}</Col>
                                        <Col md={2}>
                                            <FormControl
                                                as='select'
                                                value={item.qty}
                                                onChange={(e) => addToCart(item.product, e.target.value, dispatch)}
                                            >
                                                {[...Array(item.countInStock).keys()].map((key) => (
                                                    <option key={key} value={key + 1}>
                                                        {key + 1}
                                                    </option>
                                                ))}
                                            </FormControl>
                                        </Col>
                                        <Col md={2}>
                                            <Button
                                                type='button'
                                                variant='light'
                                                onClick={() => rmFmCart(item.product)}
                                            >
                                                <i className='fa fa-trash'></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroupItem>
                                    <h2>
                                        Subtotal: {totalItems} item{totalItems > 1 && 's'}
                                    </h2>
                                    Total: {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Button
                                        type='button'
                                        className='btn-block'
                                        disabled={cartItems.length === 0}
                                        onClick={checkOut}
                                    >
                                        Proceed to Checkout
                                    </Button>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    );
}
