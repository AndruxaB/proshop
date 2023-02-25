import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

export default function App() {
    return (
        <BrowserRouter>
            <Container>
                <Header />
                <Main />
                <Footer />
            </Container>
        </BrowserRouter>
    );
}
