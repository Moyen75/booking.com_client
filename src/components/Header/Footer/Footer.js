import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Header.css'

const Footer = () => {
    return (
        <div>
            <div className='top-footer'>
                <div>
                    <h1>Save time, Save Money!</h1>
                    <p>Sign up and we'll send the best deals to you</p>
                    <small className='justify-content-center'><input type="email" placeholder='E-mail' className="p-2 mt-1" id="" />
                        <button className='btn btn-primary p-2 mb-1'>subscribe now</button></small>
                </div>
            </div>
            <div className="main-footer ">
                <h1>About us</h1>
                <hr className='w-25 mx-auto text-success' />
                <Row xs={1} sm={3} md={3}>
                    <Col>
                        <ul>
                            <li>Countries</li>
                            <li>Religion</li>
                            <li>Cities</li>
                            <li>Districts</li>
                            <li>Airports</li>
                            <li>Hotels</li>
                            <li>Interested places</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>Homes</li>
                            <li>Apartments</li>
                            <li>Resorts</li>
                            <li>Villas</li>
                            <li>Hostels</li>
                            <li>B&Bs</li>
                            <li>Guest Houses</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>Unique places to stay</li>
                            <li>All destinations</li>
                            <li>Discover</li>
                            <li>Reviews</li>
                            <li>Airports</li>
                            <li>Hotels</li>
                            <li>Interested places</li>
                        </ul>
                    </Col>
                </Row>

            </div>
            <p className='copyright'>&copy;2021,all rights reserved .muhammad moyenul islam.</p>
        </div>
    );
};

export default Footer;