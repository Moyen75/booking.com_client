import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { logOut, setUser, user, setIsLoading } = useAuth()
    console.log('console log from header for user', user)
    const history = useHistory()
    const handleLogout = () => {
        logOut()

        history.push('/home')
            .then(() => {
                setUser({})
            })
            .finally(() => {
                setIsLoading(true)
            })
    }
    return (
        <div className='main-header'>
            <Navbar bg="primary" variant='dark' fixed='top' expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/home">Booking.Com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link ><Link to='/home'>Home</Link></Nav.Link>
                            <Nav.Link ><Link to='/orders'>My orders</Link></Nav.Link>
                            <Nav.Link  >
                                <Link to='/manageOrders'>Manage all orders</Link>
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Link><button className='btn btn-warning'>Book Now</button></Link>
                            {user?.email ? <button onClick={handleLogout} className='btn'>Log out</button> : <Link to='/login'>
                                <button className='btn btn-primary'>Login</button></Link>}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;