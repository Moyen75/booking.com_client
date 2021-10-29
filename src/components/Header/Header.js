import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
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
                            <Link to='/home'><Nav.Link >Home</Nav.Link></Link>
                            <Link to='/orders'><Nav.Link >My orders</Nav.Link></Link>
                            <Link to='/manageOrders'><Nav.Link  >
                                Manage orders
                            </Nav.Link></Link>
                        </Nav>
                        <Form className="d-flex">
                            <Link><button className='btn btn-warning'>Book</button></Link>
                            <Link><button className='btn btn-primary'>Login</button></Link>
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success" className='btn btn-dark'>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;