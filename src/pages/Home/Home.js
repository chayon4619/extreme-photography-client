import React from 'react';
import Banner from './Banner';
import Clients from './Clients';
import Stats from './Stats';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <Clients></Clients>
        </div>
    );
};

export default Home;