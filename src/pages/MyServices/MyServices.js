import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const MyServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h1 className='text-center font-bold text-5xl text-indigo-600 my-8'>All My Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-8 my-6'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default MyServices;