import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import MyReview from './MyReview';

const MyReviews = () => {

    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email]);

    return (
        <div>
            <h1 className='text-center font-bold text-5xl mt-10'>ALL My Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 m-10'>
                {
                    myReviews.map(myReview => <MyReview
                        key={myReview._id}
                        myReview={myReview}
                    ></MyReview>)
                }
            </div>
        </div>
    );
};

export default MyReviews;