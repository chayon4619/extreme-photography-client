import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const ServiceDetail = () => {
    const service = useLoaderData()
    return (
        <div>
            {
                <Service service={service}></Service>
            }
            <h1>review</h1>
        </div>
    );
};

export default ServiceDetail;