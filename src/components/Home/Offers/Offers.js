import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../../hooks/useData';
import Offer from '../../Offer/Offer';

const Offers = () => {
    const offers = useData();
    console.log(offers)
    return (
        <div>
            <h1>We offer...</h1>
            <hr className='w-25 mx-auto text-success' />
            <Row xs={1} sm={3} md={3} className='g-4 mx-4'>
                {
                    offers?.map(offer => <Offer
                        key={offer.id}
                        offer={offer}
                    ></Offer>)
                }
            </Row>
        </div>
    );
};

export default Offers;