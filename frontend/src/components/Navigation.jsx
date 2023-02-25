import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
            <Container>
                <Link to='/'>
                    <Navbar.Brand>ProShop</Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls='basic-navbar-nav' />

                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ml-auto'>
                        <Link className='nav-link' to='/cart'>
                            <i className='fa fa-shopping-cart' />
                            &nbsp;Cart
                        </Link>
                        <Link className='nav-link' to='/login'>
                            <i className='fa fa-user' />
                            &nbsp;Login
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
