import { Routes, Route } from 'react-router-dom';
import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';
import NoPage from '../screens/NoPage';
import ProductScreen from '../screens/ProductScreen';

export default function Main() {
    return (
        <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id?/:qty?' element={<CartScreen />} />
            <Route path='*' element={<NoPage />} />
        </Routes>
    );
}
