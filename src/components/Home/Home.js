import React from 'react';
import { Spinner } from 'react-bootstrap';
import Offers from './Offers/Offers';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Offers></Offers>
        </div>
    );
};

export default Home;