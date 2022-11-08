import React from 'react';
import { Link } from 'react-router-dom';

const MyReview = ({ myReview, handelDelete }) => {
    const { _id, serviceName, reviewText } = myReview;
    return (
        <div>
            <div className="card w-96 bg-cyan-200 text-gray-900">
                <div className="card-body ">
                    <h2 className="card-title text-pink-700">{serviceName}</h2>
                    <p className=' font-bold text-xs text-left'>{reviewText}</p>
                    <div className="card-actions justify-between">
                        <Link to={`/update/${_id}`}><button className="btn btn-outline btn-primary">Edit Review</button></Link>
                        <button onClick={() => handelDelete(_id)} className="btn btn-outline btn-ghost">Delete Review</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyReview;