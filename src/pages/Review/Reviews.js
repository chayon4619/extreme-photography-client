import React from 'react';
import Review from './Review';

const Reviews = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-5xl my-8'>All Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 m-10'>
                {
                    <Review></Review>
                }
            </div>
        </div>
    );
};

export default Reviews;