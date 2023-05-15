import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useStoreProvider } from '../store/StoreProvider';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormControl';
import { login } from '../actions/userActions';

export default function LoginScreen() {
    const navigate = useNavigate();
    const [store, dispatch] = useStoreProvider();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userLogin = store.userLogin;
    const { loading, error, userInfo } = userLogin;

    const redirect = window.location.search ? window.location.search.split('=')[1] : '/';

    console.log(redirect);

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Submit login', email, password);
        login(email, password, dispatch);
    };

    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error && <Message variant='danger' message={error} />}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button className='mt-3' type='submit' variant='primary'>
                    Log In
                </Button>
            </Form>
            <Row className='py-3'>
                <Col>
                    New Customer? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
                </Col>
            </Row>
        </FormContainer>
    );
}
