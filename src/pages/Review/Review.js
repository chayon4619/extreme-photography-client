import React from 'react';

const Review = ({ review }) => {
    const { userName, email, reviewText, photoURL } = review
    return (
        <div>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-teal-300 text-gray-100">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src={photoURL} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold text-violet-800">{userName}</h4>
                            <span className="text-xs text-gray-900">{email}</span>
                        </div>
                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm text-gray-900">
                    <p>{reviewText}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;