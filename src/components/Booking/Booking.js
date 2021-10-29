import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const id = useParams()
    console.log('console log id from booking.', id)
    return (
        <div className='mt-5 pt-5'>
            <h1>This is booking.</h1>
        </div>
    );
};

export default Booking;