import React from 'react';
import MyServices from '../MyServices/MyServices';
import Banner from './Banner';
import Clients from './Clients';
import Stats from './Stats';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyServices></MyServices>
            <Stats></Stats>
            <Clients></Clients>
        </div>
    );
};

export default Home;