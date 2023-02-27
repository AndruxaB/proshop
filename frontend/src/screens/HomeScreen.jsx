/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { useStoreProvider } from '../store/StoreProvider';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

export default function HomeScreen() {
    const [state, dispatch] = useStoreProvider();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        listProducts(dispatch, setIsLoading);
    }, []);

    if (isLoading) return <Loader />;
    const { error, products } = state.productList;
    if (error) return <Message variant={'danger'} message={error} />;

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product, index) => (
                    <Col key={index} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
}
