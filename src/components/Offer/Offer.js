import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Header/Header.css'

const Offer = (props) => {
    const { name, img, details } = props.offer;
    return (
        <div>
            <Col className='offer'>
                <Card.Img variant="top" src={img} />
                <Card.Body className='offer-details'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to='/'><button className='btn btn-warning'>Book Now</button></Link>
                </Card.Body>
            </Col>
        </div>
    );
};

export default Offer;