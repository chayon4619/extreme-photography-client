import React from 'react';

const MyReview = ({ myReview }) => {
    const { serviceName, reviewText } = myReview
    return (
        <div>
            <div className="card w-96 bg-cyan-200 text-gray-900">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{serviceName}</h2>
                    <p>{reviewText}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Edit Review</button>
                        <button className="btn btn-ghost">Delete Review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReview;