import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useData from '../../../hooks/useData';
// import useData from '../../../hooks/useData';
import Offer from '../../Offer/Offer';

const Offers = () => {
    //    const {services}=useData();
    const [services, setServices] = useState([])
    const [dataLoading, setDataLoading] = useState(true)
    useEffect(() => {
        // setDataLoading(true)
        fetch('https://agile-wildwood-80919.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
        // setDataLoading(false)
    }, [])
    return (
        <div>
            <h1>We offer...</h1>
            <hr className='w-25 mx-auto text-success' />
            <Row xs={1} sm={3} md={3} className='g-4 mx-4 pb-3'>
                {
                    services?.map(service => <Offer
                        key={service.id}
                        offer={service}
                    ></Offer>)
                }
            </Row>
        </div>
    );
};

export default Offers;