import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {

    const { _id, price, picture, name, about } = service

    return (
        <div>
            <div className="max-w-lg p-4 shadow-md bg-gray-200 text-gray-900 rounded-lg">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <h1 className="mb-0 capitalize font-bold text-2xl text-sky-700">{name}</h1>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={picture} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                    </div>
                    <div className="space-y-2">
                        <h1 className="block">
                            <h3 className="text-xl font-bold text-violet-700">Price : ${price}</h3>
                        </h1>
                        <p className="leading-snug text-gray-900 font-semibold">{about.length > 90 ? about.slice(0, 90) + '...' : about}</p>
                    </div>
                    <div className='flex justify-end'>
                        <Link to={`service/${_id}`}><button className="btn btn-outline btn-primary">View Detail</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;