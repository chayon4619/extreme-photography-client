import React from 'react';

const MyReview = ({ myReview, handelDelete }) => {
    const { _id, serviceName, reviewText } = myReview;
    return (
        <div>
            <div className="card w-96 bg-cyan-200 text-gray-900">
                <div className="card-body ">
                    <h2 className="card-title text-pink-700">{serviceName}</h2>
                    <p className='items-center  text-center'>{reviewText}</p>
                    <div className="card-actions justify-between">
                        <button className="btn btn-primary">Edit Review</button>
                        <button onClick={() => handelDelete(_id)} className="btn btn-ghost">Delete Review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReview;